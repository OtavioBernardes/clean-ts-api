import { Either, left, right } from '../shared'
import { InvalidPriceError } from "./errors"

export class Price {
    public readonly value: number

    private constructor(price: number) {
        this.value = price
    }

    public static create(price: number): Either<InvalidPriceError, Price> {
        if (this.validate(price))
            return right(new Price(price))
        return left(new InvalidPriceError(price))
    }

    static validate(price: number) {
        if (price < 0 || typeof price !== 'number')
            return false
        return true
    }
}