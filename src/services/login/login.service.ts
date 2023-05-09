import { sign } from 'jsonwebtoken';
import 'dotenv/config';
import { TUser } from '../../interfaces/users/users.interface';

export const loginService = async (userData: TUser): Promise<string> => {
  const token = sign(
    { admin: String(userData.admin) },
    process.env.SECRET_KEY!,
    {
      subject: String(userData.id),
    }
  );

  return token;
};
