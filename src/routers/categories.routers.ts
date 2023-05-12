import { Router } from 'express';
import { postCategoriesController } from '../controllers/categories/postCategoeries.controller';
import { verifyIsAdmin } from '../middlewares/users/verifyIsAdmin.middleware';
import { verifyNamaCategoryExistMiddleware } from '../middlewares/categories/verifyNameCategoryExist.middleware';
import { getCategoriesController } from '../controllers/categories/getCategories.controller';
import { getRealEstateByCategoryController } from '../controllers/categories/getRealEstateByCategory.controller';
import { validationOdBodyMiddleware } from '../middlewares/validationOfBody.middleware';
import { categoryRequest } from '../schemas/categories.schema';

export const categotyRouter = Router();

categotyRouter.post(
  '',
  validationOdBodyMiddleware(categoryRequest),
  verifyIsAdmin,
  verifyNamaCategoryExistMiddleware,
  postCategoriesController
);

categotyRouter.get('', getCategoriesController);
categotyRouter.get('/:id/realEstate', getRealEstateByCategoryController);
