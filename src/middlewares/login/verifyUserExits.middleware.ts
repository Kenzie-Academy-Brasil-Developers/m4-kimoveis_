import { NextFunction, Request, Response } from 'express';
import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities';
import { AppError } from '../../error';
import { compareSync } from 'bcrypt';

export const verifyUserExist = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const repository: Repository<User> = AppDataSource.getRepository(User);
  const { body } = req;

  const user: User | null = await repository
    .createQueryBuilder()
    .where('email = :email', { email: body.email })
    .getOne();

  if (!user || !compareSync(body.password, user.password))
    throw new AppError(`Wrong email/password`, 401);

  res.locals.loginUserResponse = user;

  next();
};
