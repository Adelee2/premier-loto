import request from 'supertest';
import mongoose from 'mongoose';
import App from '@/app';
import AdminRoute from '@routes/admin.route';
import fixtureModel from '@/models/fixtures.model';
import teamModel from '@/models/teams.model';
import AuthRoute from '../routes/auth.route';
import { CreateFixtureDto } from '@/dtos/fixture.dto';
import { CreateTeamDto } from '@/dtos/teams.dto';
import crypto from 'crypto';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Users', () => {
  describe('[POST] /team/create', () => {
    it('response Create Team', async () => {
      const words: any = Math.random().toString(36).substr(2, 5);

      const userData: CreateTeamDto = {
        abrv: `${words} club`,
        history: `${words} Stadium`,
        clubname: `${words} club`,
      };
      const authData = {
        email: 'admin@gmail.com',
        password: '12345',
      };

      const authRoute = new AuthRoute();

      (mongoose as any).connect = jest.fn();
      let app = new App([authRoute]);
      request(app.getServer()).post(`${authRoute.path}admin-login`).send(authData);

      const adminRoute = new AdminRoute();
      const team = teamModel;

      // team.findOne = jest.fn().mockReturnValue(null);
      team.create = jest.fn().mockReturnValue({
        abrv: `${words} club`,
        history: `${words} Stadium`,
        clubname: `${words} club`,
      });

      (mongoose as any).connect = jest.fn();
      app = new App([adminRoute]);
      return request(app.getServer()).post(`${adminRoute.path}/teams/create`).send(userData);
    });
  });
  describe('[POST] /fixture/create', () => {
    it('response Create Fixture', async () => {
      const words: any = Math.random().toString(36).substr(2, 5);
      const id: string = crypto.randomBytes(20).toString('hex');

      const userData: CreateFixtureDto = {
        uniqueid: id,
        teamA: '618e62abe9ed24514c0fe931',
        teamB: '618e9075227f846c9bac8ebf',
        playofftime: new Date(),
        matchdate: new Date(),
        venue: `${words} Stadium`,
        status: 'pending',
        contendingtitle: '618e680171114173d40abb21',
      };
      const authData = {
        email: 'admin@gmail.com',
        password: '12345',
      };

      const authRoute = new AuthRoute();

      (mongoose as any).connect = jest.fn();
      let app = new App([authRoute]);
      request(app.getServer()).post(`${authRoute.path}admin-login`).send(authData);

      const adminRoute = new AdminRoute();
      const fixture = fixtureModel;

      // team.findOne = jest.fn().mockReturnValue(null);
      fixture.create = jest.fn().mockReturnValue({
        uniqueid: id,
        teamA: '618e62abe9ed24514c0fe931',
        teamB: '618e9075227f846c9bac8ebf',
        playofftime: new Date(),
        matchdate: new Date(),
        venue: `${words} Stadium`,
        status: 'pending',
        contendingtitle: '618e680171114173d40abb21',
      });

      (mongoose as any).connect = jest.fn();
      app = new App([adminRoute]);
      return request(app.getServer()).post(`${adminRoute.path}/fixture/create`).send(userData);
    });
  });

  describe('[PUT] /teams/update/:id', () => {
    it('response Update Team', async () => {
      const id = '618e62abe9ed24514c0fe931';
      const words: any = Math.random().toString(36).substr(2, 5);

      const userData: CreateTeamDto = {
        abrv: `${words} club`,
        history: `${words} Stadium`,
        clubname: `${words} club`,
      };
      const authData = {
        email: 'admin@gmail.com',
        password: '12345',
      };

      const authRoute = new AuthRoute();

      (mongoose as any).connect = jest.fn();
      let app = new App([authRoute]);
      request(app.getServer()).post(`${authRoute.path}admin-login`).send(authData);

      const adminRoute = new AdminRoute();

      app = new App([adminRoute]);
      return request(app.getServer()).put(`${adminRoute.path}/teams/update/${id}`).send(userData);
    });
  });

  describe('[PUT] /fixture/update/:id', () => {
    it('response Update Fixture', async () => {
      const id = '618e62abe9ed24514c0fe931';
      const words: any = Math.random().toString(36).substr(2, 5);
      const _id: string = crypto.randomBytes(20).toString('hex');

      const userData: CreateFixtureDto = {
        uniqueid: _id,
        teamA: '618e62abe9ed24514c0fe931',
        teamB: '618e9075227f846c9bac8ebf',
        playofftime: new Date(),
        matchdate: new Date(),
        venue: `${words} Stadium`,
        status: 'pending',
        contendingtitle: '618e680171114173d40abb21',
      };
      const authData = {
        email: 'admin@gmail.com',
        password: '12345',
      };

      const authRoute = new AuthRoute();

      (mongoose as any).connect = jest.fn();
      let app = new App([authRoute]);
      request(app.getServer()).post(`${authRoute.path}admin-login`).send(authData);

      const adminRoute = new AdminRoute();

      app = new App([adminRoute]);
      return request(app.getServer()).put(`${adminRoute.path}/fixture/update/${id}`).send(userData);
    });
  });

  // describe('[DELETE] /team/delete/:id', () => {
  //   it('response Delete Team', async () => {
  //     const Id = '60706478aad6c9ad19a31c84';

  //     const adminRoute = new AdminRoute();
  //     const team = teamModel;

  //     team.findByIdAndDelete = jest.fn().mockReturnValue({
  //       _id: '618e62c8e9ed24514c0fe934',
  //       abrv: 'Man City',
  //       history: 'Ethian Stadium',
  //       clubname: 'Manchester City',
  //       createdAt: '2021-11-12T00:00:00.000Z',
  //       updateAt: '2021-11-12T00:00:00.000Z',
  //     });

  //     (mongoose as any).connect = jest.fn();
  //     const app = new App([adminRoute]);
  //     return request(app.getServer()).delete(`${adminRoute.path}/team/delete/${Id}`);
  //   });
  // });
  // describe('[DELETE] /fixture/delete/:id', () => {
  //   it('response Delete User', async () => {
  //     const Id = '618e6eaea3a106588c650803';

  //     const adminRoute = new AdminRoute();
  //     const team = teamModel;

  //     team.findByIdAndDelete = jest.fn().mockReturnValue({
  //       status: 'pending',
  //       _id: '618e6eaea3a106588c650803',
  //       uniqueid: '028382382y3223ws',
  //       teamA: '618e62abe9ed24514c0fe931',
  //       teamB: '618e62c8e9ed24514c0fe934',
  //       playofftime: '2021-11-12T03:00:00.000Z',
  //       matchdate: '2021-11-12T05:00:00.000Z',
  //       venue: 'Old trafford',
  //       contendingtitle: '618e8e8a227f846c9bac8eaa',
  //       createdAt: '2021-11-12T13:39:58.344Z',
  //       updateAt: '2021-11-12T13:39:58.344Z',
  //     });

  //     (mongoose as any).connect = jest.fn();
  //     const app = new App([adminRoute]);
  //     return request(app.getServer()).delete(`${adminRoute.path}/fixture/delete/${Id}`);
  //   });
  // });
});
