import { Router } from 'express';
import AdminController from '@controllers/admin.controller';
import { Routes } from '@interfaces/routes.interface';

class AdminRoute implements Routes {
  public path = '/admin/';
  public router = Router();
  public AdminController = new AdminController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}users`, this.AdminController.getUsers);
    this.router.get(`${this.path}user/:id`, this.AdminController.getUserById);
  }
}

export default AdminRoute;
