import { Request, Response } from 'express';
import { AppError } from '../../error';
import { deleteUserService } from '../../services/users/deleteUser.service';

export const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = Number(req.params.id);

  if (res.locals.isAdmin === 'false')
    throw new AppError('Insufficient permission', 401);

  await deleteUserService(id);

  return res.status(204).send();
};
