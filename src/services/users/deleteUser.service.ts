import { Repository } from 'typeorm';
import { User } from '../../entities';
import { AppDataSource } from '../../data-source';

export const deleteUserService = async (id: number): Promise<void> => {
  const repository: Repository<User> = AppDataSource.getRepository(User);

  await repository
    .createQueryBuilder('users')
    .softDelete()
    .where('id = :id', { id })
    .execute();
};
