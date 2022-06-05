import { ProductData } from '../../../domain'

export interface ProductRepository {
    findOneByName(name: string): Promise<ProductData>
    save(product: ProductData): Promise<any>
}