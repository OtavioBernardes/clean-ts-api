import { DeleteProduct } from '../../../../use-cases/product'
import { MysqlProductRepository } from '../../../../external/repositories/mysql';

export const makeDbDeleteProduct = (): DeleteProduct => {
	const inMemoryProductRepository = new MysqlProductRepository();
	const usecase = new DeleteProduct(inMemoryProductRepository)
	return usecase;
}
