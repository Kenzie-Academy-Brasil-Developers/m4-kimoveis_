import { z } from 'zod';
import { category, categotyRequest } from '../../schemas/categories.schema';

export type TCategories = z.infer<typeof category>;

export type TCategoriesRequest = z.infer<typeof categotyRequest>;
