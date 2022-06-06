import { ProductData } from "../../domain";
import { ProductRepository } from "./ports/product-repository";
import { UseCase } from "../ports/use-case";

export class DeleteProduct implements UseCase {

    private repo: ProductRepository;

    constructor(repo: ProductRepository) {
      this.repo = repo;
    }
    
    async perform(id: number): Promise<ProductData> {
      return this.repo.delete(id)
    }
}