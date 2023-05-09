import { Request, Response } from 'express';
import { TCategories } from '../../interfaces/categories/categories.interface';
import { getCategoriesService } from '../../services/categories/getCategories.service';

export const getCategoriesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const categories: TCategories[] = await getCategoriesService();

  return res.status(200).json(categories);
};
