import { Request, Response } from 'express';
import { AppError } from '../../error';
import { postCategoriesService } from '../../services/categories/postCategories.service';
import { TCategories } from '../../interfaces/categories/categories.interface';

export const postCategoriesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { body } = req;
  const isAdmin: boolean = res.locals.isAdmin;

  if (!isAdmin) throw new AppError('Insufficient permission', 401);

  const categories: TCategories = await postCategoriesService(body);

  return res.status(201).json(categories);
};
