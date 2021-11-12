/* eslint-disable prettier/prettier */
import { NextFunction, Request, Response } from 'express';
import userService from '@services/users.service';
import { Team } from '@interfaces/teams.interface';
import { Fixture } from '@/interfaces/fixtures.interface';

class UsersController {
  private userService = new userService();

  public getTeams = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const teamData: Team[] = await this.userService.getTeams();

      res.status(200).json({ data: teamData, message: 'View Teams' });
    } catch (e) {
      next(e);
    }
  }
  public getFixtures = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const query: string = `${req.query.status}` || '';
      const Data: Fixture[] = await this.userService.getFixtures(query);

      res.status(200).json({ data: Data, message: 'View Fixtures' });
    } catch (e) {
      next(e);
    }
  }
  public search = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const query: string = `${req.query.q}`|| '';
      const Data: any = await this.userService.search(query);

      res.status(200).json({ data: Data, message: 'Search Result' });
    } catch (e) {
      next(e);
    }
  }
}
export default UsersController;
