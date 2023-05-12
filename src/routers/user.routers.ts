import { Router } from 'express';
import { postUserController } from '../controllers/users/createUser.controller';
import { verifyEmailExits } from '../middlewares/users/verifyEmailExit.middleware';
import { verifyIsAdmin } from '../middlewares/users/verifyIsAdmin.middleware';
import { getUserController } from '../controllers/users/getUsers.controller';
import { deleteUserController } from '../controllers/users/deleteUser.controller';
import { patchUserController } from '../controllers/users/patchUser.controller';
import { verifyUserExist } from '../middlewares/users/verifyUserExit.middleware';
import { validationOdBodyMiddleware } from '../middlewares/validationOfBody.middleware';
import { createUserRequest, updateUserRequest } from '../schemas/user.schema';

export const usersRoute = Router();

usersRoute.post(
  '',
  validationOdBodyMiddleware(createUserRequest),
  verifyEmailExits,
  postUserController
);
usersRoute.get('', verifyIsAdmin, getUserController);
usersRoute.delete('/:id', verifyUserExist, verifyIsAdmin, deleteUserController);
usersRoute.patch(
  '/:id',
  validationOdBodyMiddleware(updateUserRequest),
  verifyUserExist,
  verifyIsAdmin,
  patchUserController
);
