import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities';
import { TUser, TUserRequest } from '../../interfaces/users/users.interface';
import { allUserRequest } from '../../schemas/user.schema';

export const getUsersService = async (): Promise<TUserRequest[]> => {
  const repository: Repository<User> = AppDataSource.getRepository(User);

  const users: TUser[] = await repository.find();

  return allUserRequest.parse(users);
};
