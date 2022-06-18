import { DeleteProduct } from '../../../../use-cases/product'
import { MysqlAdapter } from '../../../../external/repositories/adapters';
import { ProductRepositoryDatabase } from '../../../../external/repositories';

export const makeDbDeleteProduct = (): DeleteProduct => {
	const connection = new MysqlAdapter()
	const inDatabaseProductRepository = new ProductRepositoryDatabase(connection);
	const usecase = new DeleteProduct(inDatabaseProductRepository)
	return usecase;
}
