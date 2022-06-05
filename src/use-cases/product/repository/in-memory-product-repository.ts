import { ProductData } from "../../../domain/product";
import { ProductRepository } from "../ports/product-repository";

export class InMemoryProductRepository implements ProductRepository {

    /*
    private repository: ProductData[]

    constructor(repository: ProductData[]) {
        this.repository = repository
    }
    */
    async save(prod: ProductData): Promise<any> {
        //this.repository.push(prod)
        return prod
    }

    async findOneByName(name: string): Promise<any> {
        return name
    }
}