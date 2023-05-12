import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { RealEstate, Schedule } from '../../entities';
import { AppError } from '../../error';

export const getSchedulesService = async (
  realEstateId: number
): Promise<any | null> => {
  const repository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  const repositoryRealEstate: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const realEstate: RealEstate | null = await repositoryRealEstate.findOne({
    where: {
      id: realEstateId,
    },
    relations: {
      address: true,
      category: true,
    },
  });

  const shcedulesRealEstate: Schedule[] | null = await repository.find({
    where: {
      realEstate: {
        id: realEstateId,
      },
    },
    relations: {
      user: true,
    },
  });

  if (shcedulesRealEstate.join() === [].join())
    throw new AppError('RealEstate not found', 404);

  const newData = {
    ...realEstate,
    schedules: shcedulesRealEstate,
  };

  return newData;
};
