import { Request, Response } from 'express';

class UserController {
  async createUser(req: Request, res: Response) {
    return res.send({ message: 'it worked!' });
  }
}

export default UserController;