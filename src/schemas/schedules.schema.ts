import { z } from 'zod';

export const schedule = z.object({
  id: z.number(),
  date: z.date(),
  hour: z.date(),
  realEstateId: z.number(),
  userId: z.number(),
});
