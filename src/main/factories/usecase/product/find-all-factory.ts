import { FindAll } from '../../../../use-cases/product';
import { MysqlAdapter } from '../../../../external/repositories/adapters';
import { ProductRepositoryDatabase } from '../../../../external/repositories';

export const makeDbFindAllProduct = (): FindAll => {
	const connection = new MysqlAdapter()
	const inDatabaseProductRepository = new ProductRepositoryDatabase(connection);
	const usecase = new FindAll(inDatabaseProductRepository)
	return usecase;
}
