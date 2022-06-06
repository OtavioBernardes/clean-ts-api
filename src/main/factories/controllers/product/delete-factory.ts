import { Controller } from '../../../../presentation/ports/controller'
import { DeleteProductController } from '../../../../presentation/controllers/product/delete-controller'
import { makeDbDeleteProduct } from '../../usecase/product/delete-factory'

export const makeDeleteProductController = (): Controller => {
 const controller=  new DeleteProductController(makeDbDeleteProduct())
 return controller;
}
