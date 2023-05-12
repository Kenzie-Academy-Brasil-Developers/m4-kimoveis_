import { Router } from 'express';
import { postRealEstateController } from '../controllers/realEstate/postRealEstate.controller';
import { verifyIsAdmin } from '../middlewares/users/verifyIsAdmin.middleware';
import { getRealEstateController } from '../controllers/realEstate/getRealEstate.controller';
import { validationOdBodyMiddleware } from '../middlewares/validationOfBody.middleware';
import { realEstateWithAddresResquestOmitId } from '../schemas/realState.schema';

export const realEstateRouter = Router();

realEstateRouter.post(
  '',
  validationOdBodyMiddleware(realEstateWithAddresResquestOmitId),
  verifyIsAdmin,
  postRealEstateController
);
realEstateRouter.get('', getRealEstateController);
