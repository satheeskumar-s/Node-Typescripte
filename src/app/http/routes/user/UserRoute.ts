import express, { Application, Request, Response, NextFunction } from 'express';
import { UserAuthentication } from '../../middleware/auth/UserAuthentication';
import { UserAuthorization } from '../../middleware/auth/UserAuthorization';
import { UserController } from '../../controllers/UserController';

export class UserRoute {
  public app: Application;
  public userAuthentication: UserAuthentication;
  public userAuthorization: UserAuthorization;
  public userController: UserController;

  constructor() {
    this.app = express();
    this.userAuthentication = new UserAuthentication();
    this.userAuthorization = new UserAuthorization();
    this.userController = new UserController();
    this.mountRoutes();
  }

  private mountRoutes(): void {
    const router = express.Router();

    // public Route
    router.get('/public', async (req: Request, res: Response, next: NextFunction) => {
      await this.userController.list(req, res, next);
    });

    // Middleware to check user authentication
    router.use(async (req: Request, res: Response, next: NextFunction) => {
      await this.userAuthentication.isAuthenticated(req, res, next);
    });

    // Middleware to check user authorization
    router.use(async (req: Request, res: Response, next: NextFunction) => {
      await this.userAuthorization.isAuthorized(req, res, next);
    });

    // Private Route
    router.get('/private', async (req: Request, res: Response, next: NextFunction) => {
      await this.userController.list(req, res, next);
    });

    this.app.use('', [router]);
  }
}

export const userRoutes = new UserRoute().app;
