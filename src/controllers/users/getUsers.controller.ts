import { Request, Response } from 'express';
import { AppError } from '../../error';
import { getUsersService } from '../../services/users/getUsers.service';
import { userRequest } from '../../schemas/user.schema';

export const getUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  if (res.locals.isAdmin === 'false')
    throw new AppError('Insufficient permission', 401);

  const users = await getUsersService();

  return res.status(200).json(users);
};
