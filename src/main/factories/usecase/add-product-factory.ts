import { AddProduct } from '../../../use-cases/product/add-product'
import { InMemoryProductRepository } from '../../../use-cases/product/repository/in-memory-product-repository';

export const makeDbAddProduct = (): AddProduct => {
  const inMemoryProductRepository = new InMemoryProductRepository();
  const usecase =  new AddProduct(inMemoryProductRepository)
  return usecase;
}
