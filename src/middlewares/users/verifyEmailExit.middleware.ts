import { NextFunction, Request, Response } from 'express';
import { Repository } from 'typeorm';
import { User } from '../../entities';
import { AppDataSource } from '../../data-source';
import { AppError } from '../../error';

export const verifyEmailExits = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const repository: Repository<User> = AppDataSource.getRepository(User);
  const { email } = req.body;

  const user: User | null = await repository.findOne({
    where: {
      email: email,
    },
  });

  if (user) throw new AppError(`Email already registered`, 409);

  next();
};
