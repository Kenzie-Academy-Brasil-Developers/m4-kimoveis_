import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { AppError } from '../../error';

export const verifyIsAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const token: string | undefined = req.headers.authorization!.split(' ')[1];

  jwt.verify(
    token!,
    String(process.env.SECRET_KEY),
    (err: any, decode: any) => {
      if (err) throw new AppError(err.message, 401);

      res.locals.isAdmin = decode.admin;
      res.locals.idToken = decode.sub;
    }
  );

  next();
};
