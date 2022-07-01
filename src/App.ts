import express, { Application, Request, Response } from 'express';
import router from './app/http/routes';

class App {
  public app: Application;

  constructor() {
    this.app = express();

    // Express configuration
    this.app.set('port', process.env.PORT || 3001);

    //Mount routes
    this.mountApiRoute();
  }

  private mountApiRoute(): void {
    this.app.get('/', (req: Request, res: Response) => {
      res.status(200).send({ Success: true });
    });
    this.app.use('/api/', router);
  }
}

export default new App().app;
