import { Request, Response } from 'express';
import { AppError } from '../../error';
import { getUsersService } from '../../services/users/getUsers.service';
import { userRequest } from '../../schemas/user.schema';
import { User } from '../../entities';
import { TUserResponse } from '../../interfaces/users/users.interface';

export const getUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const isAdmin: boolean = res.locals.isAdmin;

  if (!isAdmin) throw new AppError('Insufficient permission', 403);

  const users: TUserResponse[] = await getUsersService();

  return res.status(200).json(users);
};
