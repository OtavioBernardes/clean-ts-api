import { FindAll } from '../../../../use-cases/product';
import { MysqlProductRepository } from '../../../../external/repositories/mysql';

export const makeDbFindAllProduct = (): FindAll => {
  const inMemoryProductRepository = new MysqlProductRepository();
  const usecase =  new FindAll(inMemoryProductRepository)
  return usecase;
}
