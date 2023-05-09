import { Router } from 'express';
import { verifyUserExist } from '../middlewares/login/verifyUserExits.middleware';
import { loginService } from '../services/login/login.service';
import { loginController } from '../controllers/login/login.controller';

export const loginRouter = Router();

loginRouter.post('', verifyUserExist, loginController);
