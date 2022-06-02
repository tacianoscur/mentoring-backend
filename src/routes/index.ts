import { Express } from 'express';
import users from './users';

const routes = (app: Express) => {
  app.use(users);
};

export default routes;