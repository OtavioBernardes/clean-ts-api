import { ProductData } from "../../domain/product";
import { ProductRepository } from "./ports/product-repository";

export class AddProduct {

    async handle(product: ProductData): Promise<ProductData> {
        return product
    }
}