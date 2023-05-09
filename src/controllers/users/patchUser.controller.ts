import { Request, Response } from 'express';
import { patchUserService } from '../../services/users/patchUser.servise';
import { AppError } from '../../error';

export const patchUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { body, params } = req;
  const idToken = res.locals.idToken;
  const isAdmin = res.locals.isAdmin;

  if (isAdmin === 'false' && Number(idToken) !== Number(params.id))
    throw new AppError('Insufficient permission', 401);

  const updateUser = await patchUserService(body, Number(params.id));

  return res.status(200).json(updateUser);
};
