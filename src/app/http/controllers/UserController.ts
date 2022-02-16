import { NextFunction, Request, Response } from 'express';
import { UserService } from '../../Services/UserService';

export class UserController {
  userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async list(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const data = await this.userService.list();
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json('Something went wrong');
    }
  }
}
