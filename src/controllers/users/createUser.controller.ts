import { Request, Response } from 'express';
import { TUserRequest } from '../../interfaces/users/users.interface';
import { postuserService } from '../../services/users/postUser.service';

export const postUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { body } = req;

  const dataUser: TUserRequest = await postuserService(body);

  return res.status(201).json(dataUser);
};
