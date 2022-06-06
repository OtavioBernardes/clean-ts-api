import { ProductData } from '../../../domain'

export interface ProductRepository {
    findOneByName(name: string): Promise<any>
    findAll(): Promise<ProductData[]>
    save(product: ProductData): Promise<any>
    delete(id: number): Promise<any>
}