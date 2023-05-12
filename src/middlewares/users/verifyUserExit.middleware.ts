import { NextFunction, Request, Response } from 'express';
import { Repository } from 'typeorm';
import { User } from '../../entities';
import { AppDataSource } from '../../data-source';
import { AppError } from '../../error';

export const verifyUserExist = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const id: number = Number(req.params.id);

  const repository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await repository.findOneBy({ id });

  if (user === null) throw new AppError('User not found', 404);

  next();
};
