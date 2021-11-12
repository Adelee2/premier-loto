import { Router } from 'express';
import UsersController from '@controllers/users.controller';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import authMiddleware from '@middlewares/auth.middleware';
import { CreateFixtureDto, CreateSearchDto } from '@dtos/query.dto';
class UsersRoute implements Routes {
  public path = '/user';
  public router = Router();
  public usersController = new UsersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/teams`, authMiddleware, this.usersController.getTeams);
    this.router.get(`${this.path}/fixtures`, authMiddleware, this.usersController.getFixtures);
    this.router.get(`${this.path}/search`, authMiddleware, this.usersController.search);
  }
}

export default UsersRoute;
