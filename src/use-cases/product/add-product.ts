import { ProductData } from "../../domain";
import { ProductRepository } from "./ports/product-repository";
import { UseCase } from "../ports/use-case";

export class AddProduct implements UseCase {

    private repo: ProductRepository;

    constructor(repo: ProductRepository) {
      this.repo = repo;
    }
    
    async perform(product: ProductData): Promise<ProductData> {
      return this.repo.save(product)
    }
}