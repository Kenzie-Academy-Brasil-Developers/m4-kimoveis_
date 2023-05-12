import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities';
import { TUserResponse } from '../../interfaces/users/users.interface';
import { allUserRequest } from '../../schemas/user.schema';

export const getUsersService = async (): Promise<TUserResponse[]> => {
  const repository: Repository<User> = AppDataSource.getRepository(User);

  const users: User[] = await repository.find();

  const userReturn: TUserResponse[] = allUserRequest.parse(users);

  return userReturn;
};
