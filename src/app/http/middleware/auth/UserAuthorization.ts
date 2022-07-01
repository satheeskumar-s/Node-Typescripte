import { Request, Response, NextFunction } from 'express';

export class UserAuthorization {
  // constructor() {}

  async isAuthorized(req: Request, res: Response, next: NextFunction) {
    try {
      next();
    } catch (error) {
      res.status(400).json('Not valid');
    }
  }
}
