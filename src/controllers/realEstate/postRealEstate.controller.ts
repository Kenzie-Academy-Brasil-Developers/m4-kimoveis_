import { Request, Response } from 'express';
import { AppError } from '../../error';
import { postRealEstateService } from '../../services/realEstate/postRealEstate.service';

export const postRealEstateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { body } = req;
  const isAdmin: boolean = res.locals.isAdmin;

  if (!isAdmin) throw new AppError('Insufficient permission', 403);

  const realEstate = await postRealEstateService(body);

  return res.status(201).json(realEstate);
};
