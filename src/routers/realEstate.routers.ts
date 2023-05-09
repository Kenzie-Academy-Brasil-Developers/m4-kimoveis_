import { Router } from 'express';
import { postRealEstateController } from '../controllers/realEstate/postRealEstate.controller';
import { verifyIsAdmin } from '../middlewares/users/verifyIsAdmin.middleware';

export const realEstateRouter = Router();

realEstateRouter.post('', verifyIsAdmin, postRealEstateController);
