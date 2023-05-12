import { Request, Response } from 'express';
import { RealEstate } from '../../entities';
import { getRealEstateService } from '../../services/realEstate/getRealEstate.service';

export const getRealEstateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const realEstate: RealEstate[] = await getRealEstateService();

  return res.status(200).json(realEstate);
};
