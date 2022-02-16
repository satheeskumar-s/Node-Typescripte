import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../../Services/AuthService';

export class AuthController {
  authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  async list(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const data = await this.authService.list();
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json('Something went wrong');
    }
  }
}
