import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { AppError } from '../../error';

export const verifyIsAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const token: string | undefined = req.headers.authorization;

  if (token?.split(' ')[1] === undefined)
    throw new AppError('Missing bearer token', 401);

  jwt.verify(
    token.split(' ')[1],
    String(process.env.SECRET_KEY),
    (err: any, decode: any) => {
      if (err) throw new AppError(err.message, 401);

      res.locals.isAdmin = decode.admin;
      res.locals.idToken = parseInt(decode.sub);
    }
  );

  next();
};
