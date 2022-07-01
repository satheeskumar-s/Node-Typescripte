import { Request, Response, NextFunction } from 'express';

export class UserAuthentication {
  // constructor() {}

  async isAuthenticated(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(400).json("Can't access private route");
    } catch (error) {
      res.status(400).json('Not valid');
    }
  }
}
