import { Controller } from '../../../presentation/protocols/controller'
import { ProductController } from '../../../presentation/controllers/product/add-product-controller'
import { makeDbAddProduct } from '../usecase/add-product-factory'

export const makeAddProductController = (): Controller => {
 const controller=  new ProductController(makeDbAddProduct())
 return controller;
}
