import { Repository } from 'typeorm';
import {
  TRealEstate,
  TRealEstateRequest,
  TRealEstateWithAddress,
  TRealEstateWithAddressRequest,
} from '../../interfaces/realEstate/realEstate.interface';
import { AppDataSource } from '../../data-source';
import { Address, RealEstate } from '../../entities';
import {
  realEstate,
  realEstateRequest,
  realEstateWithAddress,
} from '../../schemas/realState.schema';
import { TAddresResquest } from '../../interfaces/address/address.interface';

export const postRealEstateService = async (
  dataRequest: TRealEstateWithAddressRequest
): Promise<TRealEstateWithAddress> => {
  realEstateRequest.parse(dataRequest);

  // Address

  const repositoryAddress: Repository<Address> =
    AppDataSource.getRepository(Address);

  const address: TAddresResquest = dataRequest.address;

  const dataAddress: Address = repositoryAddress.create(address);

  const dataResultAddress: Address = await repositoryAddress.save(dataAddress);

  // realEstate

  const repositoryrRealEstate: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const dataRealEstate: TRealEstateRequest = {
    ...dataRequest,
    addressId: dataResultAddress.id,
  };

  const data: RealEstate = repositoryrRealEstate.create(dataRealEstate);

  const dataResult: RealEstate = await repositoryrRealEstate.save(data);

  // return

  const returnData: TRealEstateWithAddress = {
    ...dataResult,
    address: dataResultAddress,
    categoryId: Number(dataResult.category),
  };

  realEstateWithAddress.parse(returnData);

  console.log(returnData);
  console.log('returnData');

  return returnData;
};
