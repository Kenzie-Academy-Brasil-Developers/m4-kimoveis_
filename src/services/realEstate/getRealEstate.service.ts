import { Repository } from 'typeorm';
import { RealEstate } from '../../entities';
import { AppDataSource } from '../../data-source';

export const getRealEstateService = async (): Promise<RealEstate[]> => {
  const repository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const realEstate: RealEstate[] = await repository.find({
    relations: {
      address: true,
    },
  });

  return realEstate;
};
