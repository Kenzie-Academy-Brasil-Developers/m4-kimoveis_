import { Router } from 'express';
import { verifyUserExist } from '../middlewares/login/verifyUserExits.middleware';
import { loginController } from '../controllers/login/login.controller';
import { validationOdBodyMiddleware } from '../middlewares/validationOfBody.middleware';
import { login } from '../schemas/login.schema';

export const loginRouter = Router();

loginRouter.post(
  '',
  validationOdBodyMiddleware(login),
  verifyUserExist,
  loginController
);
