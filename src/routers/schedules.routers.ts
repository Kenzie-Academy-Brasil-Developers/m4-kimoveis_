import { Router } from 'express';
import { postSchedulesController } from '../controllers/schedules/postSchedules.controller';
import { verifyIsAdmin } from '../middlewares/users/verifyIsAdmin.middleware';
import { getSchedulesController } from '../controllers/schedules/getSchedules.controller';
import { validationOdBodyMiddleware } from '../middlewares/validationOfBody.middleware';
import { scheduleRequestBody } from '../schemas/schedules.schema';

export const schedulesRouter = Router();

schedulesRouter.post(
  '',
  verifyIsAdmin,
  validationOdBodyMiddleware(scheduleRequestBody),
  postSchedulesController
);
schedulesRouter.get('/realEstate/:id', verifyIsAdmin, getSchedulesController);
