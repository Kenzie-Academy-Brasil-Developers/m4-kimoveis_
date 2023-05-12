import { Request, Response } from 'express';
import { TRealEstate } from '../../interfaces/realEstate/realEstate.interface';
import { getRealEstateByCategoryService } from '../../services/categories/getRealEstateByCategory.service';
import { Category } from '../../entities';

export const getRealEstateByCategoryController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const idCategory: number = Number(req.params.id);

  const realEstates: Category = await getRealEstateByCategoryService(
    idCategory
  );

  return res.status(200).json(realEstates);
};
