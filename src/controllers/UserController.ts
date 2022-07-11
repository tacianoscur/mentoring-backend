import { Request, Response } from 'express';

export class UserController {
  async createUser(req: Request, res: Response) {
    return res.send({ message: 'it worked!' });
  }
}
