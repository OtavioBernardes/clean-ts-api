import { ProductData } from "../../domain/product";

export class addProduct {
    async handle(product: ProductData): Promise<ProductData> {
        return product
    }
}