import { Price, ProductData } from "./"
import { InvalidPriceError } from "./errors"
import { Either, left, right } from '../shared'

export class Product {
    public readonly name: string
    public readonly price: Price

    private constructor(name: string, price: Price) {
        this.name = name
        this.price = price
    }

    public static create(product: ProductData): Either<InvalidPriceError, Product> {
        const priceOrError = Price.create(product.price)

        if (priceOrError.isLeft())
            return left(priceOrError.value)

        const price: Price = priceOrError.value as unknown as Price
        return right(new Product(product.name, price))
    }
}