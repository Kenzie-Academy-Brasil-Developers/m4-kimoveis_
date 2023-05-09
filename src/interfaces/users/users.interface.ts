import { z } from 'zod';
import {
  createUserRequest,
  updateUserRequest,
  user,
  userRequest,
} from '../../schemas/user.schema';
import { DeepPartial } from 'typeorm';

export type TUser = z.infer<typeof user>;

export type TUserRequest = z.infer<typeof userRequest>;

export type TCreateUserRequest = z.infer<typeof createUserRequest>;

export type TUpdateUserRequest = DeepPartial<TCreateUserRequest>;
