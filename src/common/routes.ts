// src/routes.ts

import { AuthController } from '../modules/auth/auth.controller';
import { UserController } from '../modules/user/user.controller';

const controllerList = [UserController, AuthController];

export function registerControllers() {
  console.log(controllerList);
  controllerList.forEach((c) => {
    new c();
  });
}
