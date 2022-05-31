import { AddProduct } from '../../../use-cases/product/add-product'

export const makeDbAddProduct = (): AddProduct => {
  return new AddProduct();
}
