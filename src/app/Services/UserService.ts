export class UserService {
  // constructor() {}

  async list(): Promise<Array<User>> {
    const user = new User();
    return [user];
  }
}
