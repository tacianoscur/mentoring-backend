import express, { Express } from 'express';
import cors from 'cors';

import { createRoutes } from './routes';
//const errorHandler = require('./middlewares/errorHandler');

export class App {
  createServer(): Express {
    const app = express();

    app.use(cors());
    app.use(express.json());
    //app.use(errorHandler);

    createRoutes(app);

    return app;
  }
}
