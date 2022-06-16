import { FindOne } from '../../../../use-cases/product';
import { MysqlProductRepository } from '../../../../external/repositories/mysql';

export const makeDbFindOneProduct = (): FindOne => {
	const inMemoryProductRepository = new MysqlProductRepository();
	const usecase = new FindOne(inMemoryProductRepository)
	return usecase;
}
