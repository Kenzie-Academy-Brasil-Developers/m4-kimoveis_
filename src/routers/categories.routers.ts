import { Router } from 'express';
import { postCategoriesController } from '../controllers/categories/postCategoeries.controller';
import { verifyIsAdmin } from '../middlewares/users/verifyIsAdmin.middleware';
import { verifyNamaCategoryExistMiddleware } from '../middlewares/categories/verifyNameCategoryExist.middleware';
import { getCategoriesController } from '../controllers/categories/getCategories.controller';

export const categotyRouter = Router();

categotyRouter.post(
  '',
  verifyIsAdmin,
  verifyNamaCategoryExistMiddleware,
  postCategoriesController
);

categotyRouter.get('', getCategoriesController);
