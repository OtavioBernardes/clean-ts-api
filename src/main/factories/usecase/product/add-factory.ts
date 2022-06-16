import { AddProduct } from '../../../../use-cases/product'
import { MysqlProductRepository } from '../../../../external/repositories/mysql';

export const makeDbAddProduct = (): AddProduct => {
	const inMemoryProductRepository = new MysqlProductRepository();
	const usecase = new AddProduct(inMemoryProductRepository)
	return usecase;
}
