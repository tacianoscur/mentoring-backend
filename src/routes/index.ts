import { Express } from 'express';
import users from './users';

export const createRoutes = (app: Express): void => {
    app.use(users);
}
