import { ProductData } from "../../domain";
import { ProductRepository } from "./ports/product-repository";
import { UseCase } from "../ports/use-case";

export class FindOneByName implements UseCase {

    private repo: ProductRepository;

    constructor(repo: ProductRepository) {
      this.repo = repo;
    }
    
    async perform(name: string): Promise<ProductData> {
        return this.repo.findOneByName(name)
    }
}