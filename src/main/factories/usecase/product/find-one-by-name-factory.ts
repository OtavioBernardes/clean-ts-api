import { FindOneByName } from '../../../../use-cases/product';
import { MysqlProductRepository } from '../../../../external/repositories/mysql';

export const makeDbFindOneByNameProduct = (): FindOneByName => {
  const inMemoryProductRepository = new MysqlProductRepository();
  const usecase =  new FindOneByName(inMemoryProductRepository)
  return usecase;
}
