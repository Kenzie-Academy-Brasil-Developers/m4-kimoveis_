import { z } from 'zod';
import { realEstate, realEstateRequest } from '../../schemas/realState.schema';

export type TRealEstate = z.infer<typeof realEstate>;

export type TRealEstateRequest = z.infer<typeof realEstateRequest>;
