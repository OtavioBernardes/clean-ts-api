import { ProductData } from "../../../domain/product";
import { ProductRepository } from "../ports/product-repository";

export class InMemoryProductRepository implements ProductRepository {

    async save(user: ProductData): Promise<any> {
        return user
    }

    async findOneByName(name: string): Promise<any> {
        return 'findOneByName'
    }
}