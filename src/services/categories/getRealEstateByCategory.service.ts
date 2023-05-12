import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Category } from '../../entities';
import { AppError } from '../../error';

export const getRealEstateByCategoryService = async (
  idCategory: number
): Promise<Category> => {
  const repository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const realEstateByCategoryId: Category | null = await repository.findOne({
    where: {
      id: idCategory,
    },
    relations: { realEstate: true },
  });

  if (realEstateByCategoryId === null)
    throw new AppError('Category not found', 404);

  return realEstateByCategoryId;
};
