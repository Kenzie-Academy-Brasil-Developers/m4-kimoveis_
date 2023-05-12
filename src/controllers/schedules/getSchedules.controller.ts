import { Request, Response } from 'express';
import { AppError } from '../../error';
import { getSchedulesService } from '../../services/schedules/getSchedules.service';

export const getSchedulesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const realEstateId: number = Number(req.params.id);
  const isAdmin: boolean = res.locals.isAdmin;

  if (!isAdmin) throw new AppError('Insufficient permission', 403);

  const schedule = await getSchedulesService(realEstateId);

  return res.status(200).json(schedule);
};
