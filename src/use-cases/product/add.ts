import { ProductData, Product } from "../../domain";
import { InvalidPriceError } from "../../domain/errors";
import { ProductRepository } from "./ports/product-repository";
import { UseCase } from "../ports/use-case";
import { Either, left, right } from '../../shared'

export class AddProduct implements UseCase {

  private repo: ProductRepository;

  constructor(repo: ProductRepository) {
    this.repo = repo;
  }

  async perform(product: ProductData): Promise<any> {
    const newProductOrError: Either<InvalidPriceError, Product> = Product.create(product)

    if (newProductOrError.isLeft())
      return left(newProductOrError.value)

    const existsProduct = await this.repo.exists(product.name)

    if (existsProduct.length !== 0)
      return left('This product already exists in the database!')

    const newProduct: Product = newProductOrError.value
    return right(await this.repo.save({ name: newProduct.name, price: newProduct.price.value }))
  }
}