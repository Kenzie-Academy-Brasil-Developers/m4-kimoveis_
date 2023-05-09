import { z } from 'zod';

export const user = z.object({
  id: z.number(),
  name: z.string().max(45),
  email: z.string().email().max(45),
  password: z.string().max(120),
  admin: z.boolean().default(false),
  createdAt: z.date(),
  updateAt: z.date(),
  deleteAt: z.date().nullish(),
});

export const userRequest = user.omit({
  password: true,
});

export const allUserRequest = userRequest.array();

export const createUserRequest = user.omit({
  id: true,
  createdAt: true,
  updateAt: true,
  deleteAt: true,
});

export const updateUserRequest = createUserRequest.deepPartial();
