import { z } from 'zod';
import { address, addressRequest } from './address.schemas';
import { category } from './categories.schema';

export const realEstate = z.object({
  id: z.number(),
  value: z.number().or(z.string()),
  size: z.number().positive(),
  createAt: z.date(),
  updateAt: z.date(),
  address: address,
  category: category,
});

export const realEstateRequest = z.object({
  value: z.number().or(z.string()),
  size: z.number().positive(),
  address: address,
  categoryId: z.number(),
});

export const realEstateWithAddresResquestOmitId = z.object({
  value: z.number().or(z.string()),
  size: z.number().positive(),
  address: addressRequest,
  categoryId: z.number(),
});
