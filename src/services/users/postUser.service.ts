import { Repository } from 'typeorm';
import { hash } from 'bcryptjs';
import {
  TCreateUserRequest,
  TUserResponse,
} from '../../interfaces/users/users.interface';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities';
import { userRequest } from '../../schemas/user.schema';

export const postuserService = async (
  dataRequest: TCreateUserRequest
): Promise<TUserResponse> => {
  const newData = {
    ...dataRequest,
  };

  const repository: Repository<User> = AppDataSource.getRepository(User);

  const data: User = repository.create(newData);

  await repository.save(data);

  return userRequest.parse(data);
};
