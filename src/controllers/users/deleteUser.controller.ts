import { Request, Response } from 'express';
import { AppError } from '../../error';
import { deleteUserService } from '../../services/users/deleteUser.service';

export const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = Number(req.params.id);
  const isAdmin: boolean = res.locals.isAdmin;

  await deleteUserService(id, isAdmin);

  return res.status(204).send();
};
