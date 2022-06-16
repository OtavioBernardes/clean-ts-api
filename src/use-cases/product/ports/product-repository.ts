import { ProductData } from '../../../domain'

export interface ProductRepository {
    findOne(id: number): Promise<ProductData>
    exists(name: string): Promise<any>
    findAll(): Promise<ProductData[]>
    save(product: ProductData): Promise<any>
    delete(id: number): Promise<any>
}