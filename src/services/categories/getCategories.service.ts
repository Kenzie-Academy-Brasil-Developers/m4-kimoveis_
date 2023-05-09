import { Repository } from 'typeorm';
import { TCategories } from '../../interfaces/categories/categories.interface';
import { AppDataSource } from '../../data-source';
import { Category } from '../../entities';

export const getCategoriesService = async (): Promise<TCategories[]> => {
  const repository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const categories: TCategories[] = await repository.find();

  return categories;
};
