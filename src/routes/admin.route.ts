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
    this.router.post(`${this.path}/teams/create`, adminauthMiddleware, validationMiddleware(CreateTeamDto, 'body'), this.adminController.createTeam);
    this.router.post(
      `${this.path}/fixture/create`,
      adminauthMiddleware,
      validationMiddleware(CreateFixtureDto, 'body'),
      this.adminController.createFixture,
    );

    this.router.put(
      `${this.path}/teams/update/:id`,
      adminauthMiddleware,
      validationMiddleware(CreateTeamDto, 'body', true),
      this.adminController.updateTeam,
    );
    this.router.put(
      `${this.path}/fixture/update/:id`,
      adminauthMiddleware,
      validationMiddleware(CreateFixtureDto, 'body', true),
      this.adminController.updateFixture,
    );

    this.router.delete(`${this.path}/team/delete/:id`, adminauthMiddleware, this.adminController.deleteTeam);
    this.router.delete(`${this.path}/fixture/delete/:id`, adminauthMiddleware, this.adminController.deleteFixture);

    this.router.post(`${this.path}/titles/create`, adminauthMiddleware, this.adminController.createTitle);
  }
}

export default AdminRoute;
