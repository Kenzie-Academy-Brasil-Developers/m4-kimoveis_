import { Repository } from 'typeorm';
import { User } from '../../entities';
import { AppDataSource } from '../../data-source';
import { TUser } from '../../interfaces/users/users.interface';
import { AppError } from '../../error';

export const deleteUserService = async (
  id: number,
  isAdmin: boolean
): Promise<void> => {
  const repository: Repository<User> = AppDataSource.getRepository(User);

  if (!isAdmin) throw new AppError('Insufficient permission', 403);

  await repository
    .createQueryBuilder('users')
    .softDelete()
    .where('id = :id', { id })
    .execute();
};
