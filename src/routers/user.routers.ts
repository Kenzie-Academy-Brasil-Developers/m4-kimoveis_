import { Router } from 'express';
import { postUserController } from '../controllers/users/createUser.controller';
import { verifyEmailExits } from '../middlewares/users/verifyEmailExit.middleware';
import { verifyIsAdmin } from '../middlewares/users/verifyIsAdmin.middleware';
import { getUserController } from '../controllers/users/getUsers.controller';
import { deleteUserController } from '../controllers/users/deleteUser.controller';
import { patchUserController } from '../controllers/users/patchUser.controller';

export const usersRoute = Router();

usersRoute.post('', verifyEmailExits, postUserController);
usersRoute.get('', verifyIsAdmin, getUserController);
usersRoute.delete('/:id', verifyIsAdmin, deleteUserController);
usersRoute.patch('/:id', verifyIsAdmin, patchUserController);
