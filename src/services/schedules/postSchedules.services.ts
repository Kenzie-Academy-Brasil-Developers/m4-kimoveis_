import { Repository } from 'typeorm';
import {
  TScheduleRequest,
  TScheduleRequestBody,
} from '../../interfaces/schedules/schedules.interface';
import { AppDataSource } from '../../data-source';
import { RealEstate, Schedule } from '../../entities';
import { scheduleRequestBody } from '../../schemas/schedules.schema';
import { AppError } from '../../error';

export const postSchedulesServices = async (
  dataResquest: TScheduleRequestBody,
  userId: number
): Promise<void> => {
  const repository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  const scheduleFindUser: Schedule | null = await repository.findOne({
    where: {
      date: dataResquest.date,
      hour: dataResquest.hour,
    },
    relations: {
      user: true,
    },
  });

  if (scheduleFindUser && scheduleFindUser.user.id === Number(userId))
    throw new AppError(
      'User schedule to this real estate at this date and time already exists',
      409
    );

  if (scheduleFindUser)
    throw new AppError(
      'Schedule to this real estate at this date and time already exists',
      409
    );

  if (
    new Date(dataResquest.date).getDay() === 0 ||
    new Date(dataResquest.date).getDay() === 6
  ) {
    throw new AppError('Invalid date, work days are monday to friday', 400);
  }

  if (
    Number(dataResquest.hour.split(':')[0]) < 8 ||
    Number(dataResquest.hour.split(':')[0]) > 18
  )
    throw new AppError('Invalid hour, available times are 8AM to 18PM', 400);

  const repositoryRealEstate: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const verifyRealEstate: RealEstate | null =
    await repositoryRealEstate.findOneBy({ id: dataResquest.realEstateId });

  if (verifyRealEstate === null)
    throw new AppError('RealEstate not found', 404);

  const newData: TScheduleRequest = {
    ...dataResquest,
    userId,
  };

  const schedule: Schedule = repository.create(newData);

  await repository.save(schedule);
};
