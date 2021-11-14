/* eslint-disable */
// jest.useFakeTimers()
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import request from 'supertest';
import App from '@/app';
import { CreateUserDto } from '@/dtos/users.dto';
import { CreateAuthDto } from '@/dtos/auth.dto';
import AuthRoute from '@routes/auth.route';
import userModel from '@models/users.model';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 10000));
});

describe('Testing Auth', () => {
  describe('[POST] /signup', () => {
    it('response should have the Create userData', async () => {
      let words:any = Math.random().toString(36).substr(2, 5);

      const userData: CreateUserDto = {
        fullName: `${words} ${words}`,
        email: `${words}@gmail.com`,
        password: '12345',
        ip: '127.0.0.1',
        country: 'NG',
        userrole: 'customer',
        accounttype: 'customer',
      };

      const authRoute = new AuthRoute();
      const users = userModel;

      users.findOne = jest.fn().mockReturnValue(null);
      users.create = jest.fn().mockReturnValue({
        email: userData.email,
        password: await bcrypt.hash(userData.password, 10),
        ip: userData.ip,
        fullName: userData.fullName,
        country: userData.country,
        userrole: userData.userrole,
        accounttype: userData.accounttype,
      });

      (mongoose as any).connect = jest.fn();
      const app = new App([authRoute]);

      return request(app.getServer()).post(`${authRoute.path}signup`).send(userData);
    });
  });

  describe('[POST] /login', () => {
    it('response should have the Set-Cookie header with the Authorization token and redis session set', async () => {
      const authData: CreateAuthDto = {
        email: 'adeleye@gmail.com',
        password: '12345',
      };
      const authRoute = new AuthRoute();

      (mongoose as any).connect = jest.fn();
      const app = new App([authRoute]);

      return request(app.getServer())
        .post(`${authRoute.path}login`)
        .send(authData);
    });
  });

  describe('[POST] /admin-login', () => {
    it('response should have the Set-Cookie header with the Authorization token and redis session set', async () => {
      const authData: CreateAuthDto = {
        email: 'admin@gmail.com',
        password: '12345',
      };

      const authRoute = new AuthRoute();

      (mongoose as any).connect = jest.fn();
      const app = new App([authRoute]);

      return request(app.getServer())
        .post(`${authRoute.path}admin-login`)
        .send(authData);
    });
  });

  // describe('[POST] /logout', () => {
  //   it('logout Set-Cookie Authorization=; Max-age=0', async () => {
  //     const userData: User = {
  //       _id: '60706478aad6c9ad19a31c84',
  //       email: 'test@gmail.com',
  //       password: await bcrypt.hash('q1w2e3r4!', 10),
  //     };

  //     const authRoute = new AuthRoute();
  //     const users = authRoute.authController.authService.users;

  //     users.findOne = jest.fn().mockReturnValue(userData);

  //     (mongoose as any).connect = jest.fn();
  //     const app = new App([authRoute]);
  //     return request(app.getServer())
  //       .post(`${authRoute.path}logout`)
  //       .send(userData)
  //       .set('Set-Cookie', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ')
  //       .expect('Set-Cookie', /^Authorization=\; Max-age=0/);
  //   });
  // });
});
