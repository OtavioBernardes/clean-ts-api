import { ProductData } from "../../domain";
import { ProductRepository } from "./ports/product-repository";
import { UseCase } from "../ports/use-case";

export class AddProduct implements UseCase {

  private repo: ProductRepository;

  constructor(repo: ProductRepository) {
    this.repo = repo;
  }

  async perform(product: ProductData): Promise<any> {
    const existsProduct = await this.repo.findOneByName(product.name)

    if (existsProduct.length !== 0)
      return false

    return this.repo.save(product)
  }
}