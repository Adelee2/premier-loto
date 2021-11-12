/* eslint-disable prettier/prettier */
import { NextFunction, Request, Response } from 'express';
import adminService from '@services/admin.service';
import { Team } from '@interfaces/teams.interface';
import { Fixture } from '@/interfaces/fixtures.interface';
import { CreateTeamDto } from '@/dtos/teams.dto';
import { CreateFixtureDto } from '@/dtos/fixture.dto';
import { CreateTitleDto } from '@/dtos/title.dto';
import { Title } from '@/interfaces/title.interface';
class AdminController {
  private adminService = new adminService();

  public createTeam = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body: CreateTeamDto = req.body;
      const Data: Team = await this.adminService.addTeam(body);

      res.status(200).json({ data: Data, message: 'Team Created' });
    } catch (error) {
      next(error);
    }
  }
  public updateTeam = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const teamId: string = req.params.id;
      const Data: CreateTeamDto = req.body;
      const updateData: Team = await this.adminService.updateTeam(teamId, Data);

      res.status(200).json({ data: updateData, message: 'Team updated' });
    } catch (error) {
      next(error);
    }
  }

  public deleteTeam = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const teamId: string = req.params.id;
      const deleteData: Team = await this.adminService.deleteTeam(teamId);

      res.status(200).json({ data: deleteData, message: 'Team deleted' });
    } catch (error) {
      next(error);
    }
  }



  public createFixture = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body: CreateFixtureDto = req.body;
      const Data: Fixture = await this.adminService.addFixture(body);

      res.status(200).json({ data: Data, message: 'Fixture Created' });
    } catch (error) {
      next(error);
    }
  }
  public updateFixture = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const fixtureId: string = req.params.id;
      const Data: CreateFixtureDto = req.body;
      const updateData: Fixture = await this.adminService.updateFixture(fixtureId, Data);

      res.status(200).json({ data: updateData, message: 'Fixture updated' });
    } catch (error) {
      next(error);
    }
  }
  public deleteFixture = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const fixtureId: string = req.params.id;
      const deleteData: Fixture = await this.adminService.deleteFixture(fixtureId);

      res.status(200).json({ data: deleteData, message: 'Fixture deleted' });
    } catch (error) {
      next(error);
    }
  }

  public createTitle = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const title: CreateTitleDto = req.body;
      const titleData: Title = await this.adminService.addTitle(title);

      res.status(200).json({ data: titleData, message: 'Title Added' });
    } catch (error) {
      next(error);
    }
  }
}

export default AdminController;
