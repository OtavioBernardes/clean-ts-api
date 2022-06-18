import { Controller } from '../../../../presentation/ports'
import { makeDbFindOneProduct } from '../../usecase/product/find-one-factory';
import { FindOneController } from '../../../../presentation/controllers/product';

export const makeFindOneController = (): Controller => {
	const controller = new FindOneController(makeDbFindOneProduct())
	return controller;
}
