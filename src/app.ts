import express, { Express } from 'express';
import cors from 'cors';

import routes from './routes';
//const errorHandler = require('./middlewares/errorHandler');
const app: Express = express();

app.use(cors());
app.use(express.json());

routes(app);
//app.use(errorHandler);

export default app;