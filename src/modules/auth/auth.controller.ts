import { Route } from '../../../src/common';

export class AuthController {
  @Route('get', '/auth')
  getuser() {
    return { name: 'auth' };
  }
}
