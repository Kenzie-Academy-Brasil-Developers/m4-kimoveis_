import { Repository } from 'typeorm';
import { TRealEstateRequest } from '../../interfaces/realEstate/realEstate.interface';
import { AppDataSource } from '../../data-source';
import { Address, Category, RealEstate } from '../../entities';
import { realEstateWithAddresResquestOmitId } from '../../schemas/realState.schema';
import { TAddresResquest } from '../../interfaces/address/address.interface';
import { TCategories } from '../../interfaces/categories/categories.interface';
import { AppError } from '../../error';

export const postRealEstateService = async (
  dataRequest: TRealEstateRequest
): Promise<RealEstate> => {
  realEstateWithAddresResquestOmitId.parse(dataRequest);

  // Category

  const repositoryCategory: Repository<Category> =
    AppDataSource.getRepository(Category);

  const categoryGetById: TCategories | null =
    await repositoryCategory.findOneBy({ id: dataRequest.categoryId });

  if (categoryGetById === null) throw new AppError('Category not found', 404);

  const category: TCategories | null = await repositoryCategory.findOne({
    where: {
      name: categoryGetById!.name,
    },
  });

  if (category === null) throw new AppError('Category not found', 404);

  // Address

  const repositoryAddress: Repository<Address> =
    AppDataSource.getRepository(Address);

  const findAddress: Address | null = await repositoryAddress.findOne({
    where: {
      number: dataRequest.address.number!,
    },
  });

  if (findAddress) throw new AppError('Address already exists', 409);

  const address: TAddresResquest = dataRequest.address;

  const dataAddress: Address = repositoryAddress.create(address);

  const dataResultAddress: Address = await repositoryAddress.save(dataAddress);

  const newDataRequest = {
    ...dataRequest,
    address: dataResultAddress,
    category: category,
  };

  // realEstate

  const repositoryrRealEstate: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const data: RealEstate = repositoryrRealEstate.create(newDataRequest);

  console.log(data);

  const dataResult: RealEstate = await repositoryrRealEstate.save(data);

  return dataResult;
};
