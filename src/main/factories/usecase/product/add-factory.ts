import { AddProduct } from '../../../../use-cases/product'
import { MysqlAdapter } from '../../../../external/repositories/adapters';
import { ProductRepositoryDatabase } from '../../../../external/repositories';

export const makeDbAddProduct = (): AddProduct => {
	const connection = new MysqlAdapter()
	const inDatabaseProductRepository = new ProductRepositoryDatabase(connection);
	const usecase = new AddProduct(inDatabaseProductRepository)
	return usecase;
}
