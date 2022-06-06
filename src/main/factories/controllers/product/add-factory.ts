import { Controller } from '../../../../presentation/ports/controller'
import { AddProductController } from '../../../../presentation/controllers/product/add-controller'
import { makeDbAddProduct } from '../../usecase/product/add-factory'

export const makeAddProductController = (): Controller => {
 const controller=  new AddProductController(makeDbAddProduct())
 return controller;
}