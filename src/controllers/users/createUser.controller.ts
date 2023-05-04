import { Request, Response } from 'express';

export const postUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { body } = req;

  return res.status(201).json();
};
