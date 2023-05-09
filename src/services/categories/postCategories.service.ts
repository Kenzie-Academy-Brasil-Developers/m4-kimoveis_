import { Repository } from 'typeorm';
import {
  TCategories,
  TCategoriesRequest,
} from '../../interfaces/categories/categories.interface';
import { Category } from '../../entities';
import { AppDataSource } from '../../data-source';
import { categotyRequest } from '../../schemas/categories.schema';

export const postCategoriesService = async (
  data: TCategoriesRequest
): Promise<TCategories> => {
  categotyRequest.parse(data);

  const repository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const category: TCategories = repository.create(data);

  const categoryResponse: TCategories = await repository.save(category);

  return categoryResponse;
};