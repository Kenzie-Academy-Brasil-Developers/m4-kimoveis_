import { NextFunction, Request, Response } from 'express';
import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities';
import { AppError } from '../../error';
import { compareSync } from 'bcryptjs';

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

  if (!user) throw new AppError(`Invalid credentials`, 401);

  const passwordBody: string = body.password;

  const passwordUser: string = user.password;

  const passwordVerify: boolean = compareSync(passwordBody, passwordUser);

  if (!passwordVerify) throw new AppError(`Invalid credentials`, 401);

  res.locals.loginUserResponse = user;

  next();
};
