import { ProductData } from '../../src/entities/product'

describe('Register Product', () => {
    test('should add product', async () => {
        const products: ProductData[] = []
        console.log(products)
        /*const repo: ProductRepository = new InMemoryProductRepository(products)
        const useCase: RegisterProduct = new new RegisterProduct(repo)

        const name = 'Teste'
        const price = '10.00'
        const response = await useCase.registerProduct({ name, price })
        const product = repo.findProductByName('Teste')
        expect((await product).name).toBe('Teste')*/
    })
})