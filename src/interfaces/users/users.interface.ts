import { z } from 'zod';
import {
  createUserRequest,
  updateUserRequest,
  user,
  userRequest,
} from '../../schemas/user.schema';
import { DeepPartial } from 'typeorm';
import { User } from '../../entities';

export type TUser = z.infer<typeof user>;

export type TUserResponse = z.infer<typeof userRequest>;

export type TCreateUserRequest = z.infer<typeof createUserRequest>;

export type TUpdateUserRequest = DeepPartial<User>;
