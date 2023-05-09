import { Repository, UpdateResult } from 'typeorm';
import { TUpdateUserRequest } from '../../interfaces/users/users.interface';
import { User } from '../../entities';
import { AppDataSource } from '../../data-source';
import { updateUserRequest, userRequest } from '../../schemas/user.schema';

export const patchUserService = async (
  updateData: TUpdateUserRequest,
  id: number
): Promise<any> => {
  updateUserRequest.parse(updateData);

  const repository: Repository<User> = AppDataSource.getRepository(User);

  await repository
    .createQueryBuilder()
    .update(User)
    .set({
      ...updateData,
      updateAt: new Date(),
    })
    .where('id = :id', { id })
    .execute();

  const data: TUpdateUserRequest | null = await repository.findOneBy({ id });

  return userRequest.parse(data);
};
