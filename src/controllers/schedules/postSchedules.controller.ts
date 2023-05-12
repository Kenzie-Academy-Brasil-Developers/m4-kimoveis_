import { Request, Response } from 'express';
import { postSchedulesServices } from '../../services/schedules/postSchedules.services';

export const postSchedulesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { body } = req;
  const tokenId: number = res.locals.idToken;

  await postSchedulesServices(body, tokenId);

  return res.status(201).json({
    message: 'Schedule created',
  });
};
