import { Request, Response } from 'express';
import { TUserResponse } from '../../interfaces/users/users.interface';
import { postuserService } from '../../services/users/postUser.service';

export const postUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { body } = req;

  const dataUser: TUserResponse = await postuserService(body);

  return res.status(201).json(dataUser);
};
