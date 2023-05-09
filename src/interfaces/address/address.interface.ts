import { z } from 'zod';
import { address, addressRequest } from '../../schemas/address.schemas';

export type TAddress = z.infer<typeof address>;

export type TAddresResquest = z.infer<typeof addressRequest>;
