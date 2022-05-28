import { ProductData } from '../../../domain/product'

export interface ProductRepository {
    find(): Promise<ProductData[]>
    findOne(id: number): Promise<ProductData>
    save(product: ProductData): Promise<void>
}