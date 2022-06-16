import { Controller } from '../../../../presentation/ports/controller'
import { makeDbDeleteProduct } from '../../usecase/product/delete-factory'
import { DeleteProductController } from '../../../../presentation/controllers/product'

export const makeDeleteProductController = (): Controller => {
	const controller = new DeleteProductController(makeDbDeleteProduct())
	return controller;
}
