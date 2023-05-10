import { z } from 'zod';
import { category, categoryRequest } from '../../schemas/categories.schema';

export type TCategories = z.infer<typeof category>;

export type TCategoriesRequest = z.infer<typeof categoryRequest>;
