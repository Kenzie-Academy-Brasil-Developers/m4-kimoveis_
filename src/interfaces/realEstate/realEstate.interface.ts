import { z } from 'zod';
import {
  realEstate,
  realEstateRequest,
  realEstateWithAddress,
  realEstateWithAddressRequest,
} from '../../schemas/realState.schema';

export type TRealEstate = z.infer<typeof realEstate>;

export type TRealEstateRequest = z.infer<typeof realEstateRequest>;

export type TRealEstateWithAddress = z.infer<typeof realEstateWithAddress>;

export type TRealEstateWithAddressRequest = z.infer<
  typeof realEstateWithAddressRequest
>;
