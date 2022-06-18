import { FindOne } from '../../../../use-cases/product';
import { MysqlAdapter } from '../../../../external/repositories/adapters';
import { ProductRepositoryDatabase } from '../../../../external/repositories';

export const makeDbFindOneProduct = (): FindOne => {
	const connection = new MysqlAdapter()
	const inDatabaseProductRepository = new ProductRepositoryDatabase(connection);
	const usecase = new FindOne(inDatabaseProductRepository)
	return usecase;
}
