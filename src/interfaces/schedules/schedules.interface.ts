import { z } from 'zod';
import {
  schedule,
  scheduleRequest,
  scheduleRequestBody,
} from '../../schemas/schedules.schema';

export type TSchedules = z.infer<typeof schedule>;

export type TScheduleRequest = z.infer<typeof scheduleRequest>;

export type TScheduleRequestBody = z.infer<typeof scheduleRequestBody>;
