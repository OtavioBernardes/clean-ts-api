import { FindOneByName } from '../../../use-cases/product/find-one-by-name-product';
import { MysqlProductRepository } from '../../../external/mysql';

export const makeDbFindOneByNameProduct = (): FindOneByName => {
  const inMemoryProductRepository = new MysqlProductRepository();
  const usecase =  new FindOneByName(inMemoryProductRepository)
  return usecase;
}
