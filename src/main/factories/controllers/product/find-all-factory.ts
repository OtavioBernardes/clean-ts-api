import { Controller } from '../../../../presentation/ports/controller'
import { FindAllController } from '../../../../presentation/controllers/product/find-all-controller';
import { makeDbFindAllProduct } from '../../usecase/product/find-all-factory';

export const makeFindAllController = (): Controller => {
 const controller=  new FindAllController(makeDbFindAllProduct())
 return controller;
}
