import express, {Application, Request, Response, NextFunction} from 'express';
import {AuthController} from "../../controllers/AuthController";
import {UserAuthentication} from "../../middleware/auth/UserAuthentication";
import {UserAuthorization} from "../../middleware/auth/UserAuthorization";

class AuthRoute {
  public app: Application;
  public userAuthentication: UserAuthentication;
  public userAuthorization: UserAuthorization;
  public authController: AuthController;

  constructor() {
    this.app = express();
    this.userAuthentication = new UserAuthentication();
    this.userAuthorization = new UserAuthorization();
    this.authController = new AuthController();
    this.mountRoutes();
  }

  private mountRoutes(): void {
    const router = express.Router();

    // public Route
    router.get("/public", async (req: Request, res: Response, next: NextFunction) => {
      await this.authController.list(req, res, next);
    });

    // Middleware to check user authentication
    router.use(async (req: Request, res: Response, next: NextFunction) => {
      await this.userAuthentication.isAuthenticated(req, res, next);
    });

    // Job title middleware to check user authorization
    router.use(async (req: Request, res: Response, next: NextFunction) => {
      await this.userAuthorization.isAuthorized(req, res, next);
    });

    // Private Route
    router.get("/private", async (req: Request, res: Response, next: NextFunction) => {
      await this.authController.list(req, res, next);
    });

    this.app.use("", [router]);
  }
}

export const authRoutes = new AuthRoute().app;