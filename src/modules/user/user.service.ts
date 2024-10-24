// user.service.ts
class UserService {
  constructor() {}
  async getUsers() {
    const users = [{ name: 'a' }];
    if (!users.length) {
      throw new Error('No users found');
    }
    return users;
  }

  async createUser(name: string) {
    if (!name) {
      throw new Error('Name is required');
    }
    const newUser = { name: 'aa' };
    return newUser;
  }
}

const userService = new UserService();
export default userService;
