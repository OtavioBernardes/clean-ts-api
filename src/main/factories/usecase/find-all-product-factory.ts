import { FindAll } from '../../../use-cases/product/find-all-product';
import { MysqlProductRepository } from '../../../external/mysql';

export const makeDbFindAllProduct = (): FindAll => {
  const inMemoryProductRepository = new MysqlProductRepository();
  const usecase =  new FindAll(inMemoryProductRepository)
  return usecase;
}
