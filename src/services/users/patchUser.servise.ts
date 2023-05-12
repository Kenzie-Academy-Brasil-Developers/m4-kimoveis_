import { Repository, UpdateResult } from 'typeorm';
import { TUpdateUserRequest } from '../../interfaces/users/users.interface';
import { User } from '../../entities';
import { AppDataSource } from '../../data-source';
import { updateUserRequest, userRequest } from '../../schemas/user.schema';
import { AppError } from '../../error';

export const patchUserService = async (
  updateData: TUpdateUserRequest,
  id: number,
  tokenId: number,
  isAdmin: boolean
): Promise<any> => {
  if (isAdmin === false && id !== tokenId)
    throw new AppError('Insufficient permission', 403);

  const repository: Repository<User> = AppDataSource.getRepository(User);

  await repository
    .createQueryBuilder()
    .update(User)
    .set({
      ...updateData,
    })
    .where('id = :id', { id })
    .execute();

  const data: User | null = await repository.findOneBy({ id });

  return userRequest.parse(data);
};
