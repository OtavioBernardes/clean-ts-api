import { Price, ProductData } from "./"

export class Product {
    public readonly name: string
    public readonly price: Price

    private constructor(name: string, price: Price) {
        this.name = name
        this.price = price
    }

    public static create(product: ProductData): any {
        const priceOrError = Price.create(product.price) as unknown
        //const price: Price = priceOrError.value as unknown as Price
        //return new Product(product.name, price)
    }
}