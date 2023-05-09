import { z } from 'zod';
import { login } from '../../schemas/login.schema';

export type TLogin = z.infer<typeof login>;
