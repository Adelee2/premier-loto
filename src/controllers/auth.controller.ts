import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@dtos/users.dto';
import { RequestWithUser } from '@interfaces/auth.interface';
import { User } from '@interfaces/users.interface';
import AuthService from '@services/auth.service';

class AuthController {
  public authService = new AuthService();

  public signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: CreateUserDto = req.body;
      const signUpUserData: User = await this.authService.signup(userData);

      res.status(201).json({ data: signUpUserData, message: 'signup' });
    } catch (error) {
      next(error);
    }
  };

  public logIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: CreateUserDto = req.body;
      const session: any = req.session;

      const { cookie, token, findUser } = await this.authService.login(userData);

      session.email = findUser.email;
      session.token = token;
      const { password, ...updateUser } = findUser.toJSON(); // Remove password

      res.setHeader('Set-Cookie', [cookie]);
      res.status(200).json({ data: updateUser, message: 'login' });
    } catch (error) {
      next(error);
    }
  };

  public adminlogIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: CreateUserDto = req.body;
      const session: any = req.session;

      const { cookie, token, findUser } = await this.authService.adminlogin(userData);

      session.email = findUser.email;
      session.token = token;
      const { password, ...updateUser } = findUser.toJSON(); // Remove password

      res.setHeader('Set-Cookie', [cookie]);
      res.status(200).json({ data: updateUser, message: 'Admin login' });
    } catch (error) {
      next(error);
    }
  };
  public adminlogOut = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const userData: User = req.user;
      const logOutUserData: User = await this.authService.logout(userData);
      req.session.destroy(err => {
        if (err) {
          return console.log(err);
        }
        res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
        res.status(200).json({ data: logOutUserData, message: 'Admin logout' });
      });
    } catch (error) {
      next(error);
    }
  };
  public logOut = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const userData: User = req.user;
      const logOutUserData: User = await this.authService.logout(userData);
      req.session.destroy(err => {
        if (err) {
          return console.log(err);
        }
        res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
        res.status(200).json({ data: logOutUserData, message: 'logout' });
      });
    } catch (error) {
      next(error);
    }
  };
}

export default AuthController;
