import { AddProduct } from '../../../../use-cases/product/add'
import { MysqlProductRepository } from '../../../../external/mysql';

export const makeDbAddProduct = (): AddProduct => {
  const inMemoryProductRepository = new MysqlProductRepository();
  const usecase =  new AddProduct(inMemoryProductRepository)
  return usecase;
}
