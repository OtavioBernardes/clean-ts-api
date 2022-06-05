import { Controller } from '../../../../presentation/ports/controller'
import { makeDbFindOneByNameProduct } from '../../usecase/product/find-one-by-name-factory';
import { FindOneByNameController } from '../../../../presentation/controllers/product/find-one-by-name-controller';

export const makeFindOneByNameController = (): Controller => {
 const controller=  new FindOneByNameController(makeDbFindOneByNameProduct())
 return controller;
}
