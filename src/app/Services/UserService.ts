export class UserService {
  constructor() {}

  async list(): Promise<string> {
    return 'This is the message from user service';
  }
}
