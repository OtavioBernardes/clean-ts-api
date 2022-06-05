import { ProductData } from '../../../domain';
import { FindOneByName } from '../../../use-cases/product/find-one-by-name-product';
import { InMemoryProductRepository } from '../../../use-cases/product/repository/in-memory-product-repository';

export const makeDbFindOneByNameProduct = (): FindOneByName => {
  const inMemoryProductRepository = new InMemoryProductRepository();
  const usecase =  new FindOneByName(inMemoryProductRepository)
  return usecase;
}
