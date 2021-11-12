import { Router } from 'express';
import AdminController from '@controllers/admin.controller';
import { Routes } from '@interfaces/routes.interface';
import adminauthMiddleware from '@middlewares/adminauth.middleware';
import { CreateFixtureDto } from '@/dtos/fixture.dto';
import { CreateTeamDto } from '@/dtos/teams.dto';
import validationMiddleware from '@middlewares/validation.middleware';

class AdminRoute implements Routes {
  public path = '/admin';
  public router = Router();
  public adminController = new AdminController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/teams/create`, adminauthMiddleware, validationMiddleware(CreateTeamDto, 'body'), this.adminController.createTeam);
    this.router.get(
      `${this.path}/fixtures/create`,
      adminauthMiddleware,
      validationMiddleware(CreateFixtureDto, 'body'),
      this.adminController.createFixture,
    );

    this.router.put(`${this.path}/team/:id`, adminauthMiddleware, validationMiddleware(CreateTeamDto, 'body', true), this.adminController.updateTeam);
    this.router.put(
      `${this.path}/fixture/:id`,
      adminauthMiddleware,
      validationMiddleware(CreateFixtureDto, 'body', true),
      this.adminController.updateFixture,
    );

    this.router.delete(`${this.path}/team/:id`, adminauthMiddleware, this.adminController.deleteTeam);
    this.router.delete(`${this.path}/fixture/:id`, adminauthMiddleware, this.adminController.deleteFixture);
  }
}

export default AdminRoute;
