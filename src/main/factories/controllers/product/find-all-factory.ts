import { Controller } from '../../../../presentation/ports'
import { makeDbFindAllProduct } from '../../usecase/product/find-all-factory';
import { FindAllController } from '../../../../presentation/controllers/product';

export const makeFindAllController = (): Controller => {
	const controller = new FindAllController(makeDbFindAllProduct())
	return controller;
}
