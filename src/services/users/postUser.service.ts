import { Repository } from 'typeorm';
import { hash } from 'bcrypt';
import {
  TCreateUserRequest,
  TUserRequest,
} from '../../interfaces/users/users.interface';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities';
import { createUserRequest, userRequest } from '../../schemas/user.schema';

export const postuserService = async (
  dataRequest: TCreateUserRequest
): Promise<TUserRequest> => {
  createUserRequest.parse(dataRequest);

  const newData = {
    ...dataRequest,
    password: await hash(dataRequest.password, 10),
    createdAt: new Date(),
    updateAt: new Date(),
  };

  const repository: Repository<User> = AppDataSource.getRepository(User);

  const data: User = repository.create(newData);

  await repository.save(data);

  console.log(data, 'data');
  console.log(dataRequest, 'dataRequst');

  return userRequest.parse(data);
};
