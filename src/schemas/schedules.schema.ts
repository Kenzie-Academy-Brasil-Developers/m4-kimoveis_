import { z } from 'zod';

export const schedule = z.object({
  id: z.number(),
  date: z.string(),
  hour: z.string(),
  realEstateId: z.number(),
  userId: z.number(),
});

export const scheduleRequest = schedule.omit({
  id: true,
});

export const scheduleRequestBody = scheduleRequest.omit({
  userId: true,
});
