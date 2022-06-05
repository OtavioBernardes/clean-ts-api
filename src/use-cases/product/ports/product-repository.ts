import { ProductData } from '../../../domain'

export interface ProductRepository {
    findOneByName(name: string): Promise<any>
    save(product: ProductData): Promise<any>
    findAll(): Promise<ProductData[]>
}