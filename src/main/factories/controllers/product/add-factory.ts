import { Controller } from '../../../../presentation/ports'
import { makeDbAddProduct } from '../../usecase/product/add-factory'
import { AddProductController } from '../../../../presentation/controllers/product'

export const makeAddProductController = (): Controller => {
	const controller = new AddProductController(makeDbAddProduct())
	return controller;
}
