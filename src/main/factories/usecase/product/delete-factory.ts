import { DeleteProduct } from '../../../../use-cases/product/delete'
import { MysqlProductRepository } from '../../../../external/mysql';

export const makeDbDeleteProduct = (): DeleteProduct => {
  const inMemoryProductRepository = new MysqlProductRepository();
  const usecase = new DeleteProduct(inMemoryProductRepository)
  return usecase;
}
