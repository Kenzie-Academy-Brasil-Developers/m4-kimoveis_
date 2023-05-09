import { NextFunction, Request, Response } from 'express';
import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Category } from '../../entities';
import { TCategories } from '../../interfaces/categories/categories.interface';
import { AppError } from '../../error';

export const verifyNamaCategoryExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const { body } = req;

  const repository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const categories: TCategories | null = await repository.findOne({
    where: {
      name: body.name,
    },
  });

  if (categories) throw new AppError(`Category already registered`, 409);

  next();
};
