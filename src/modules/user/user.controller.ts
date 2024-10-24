// user.controller.ts
import { Route } from '../../../src/common';
import userService from './user.service';

export class UserController {
  constructor() {}
  @Route('get', '/')
  async get() {
    return await userService.getUsers();
  }

  @Route('get', '/users')
  async getuser() {
    throw new Error('custom err');
  }
}
