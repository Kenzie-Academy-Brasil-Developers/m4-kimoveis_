import { number, z } from 'zod';
import { address } from './address.schemas';

export const realEstate = z.object({
  id: z.number(),
  sold: z.boolean(),
  value: z.number(),
  size: z.number(),
  createAt: z.date(),
  updateAt: z.date(),
  addressId: z.number(),
  categoryId: z.number(),
});

export const realEstateRequest = realEstate.omit({
  id: true,
  createAt: true,
  updateAt: true,
});

export const realEstateWithAddress = z.object({
  id: z.number(),
  sold: z.boolean(),
  value: z.number(),
  size: z.number(),
  createAt: z.date(),
  updateAt: z.date(),
  address: address,
  categoryId: z.number(),
});

export const realEstateWithAddressRequest = realEstateWithAddress.omit({
  id: true,
  createAt: true,
  updateAt: true,
});
