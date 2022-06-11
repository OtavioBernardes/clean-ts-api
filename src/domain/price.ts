export class Price {
    public readonly value: number

    private constructor(price: number) {
        this.value = price
    }

    public static create(price: number): any {
        if (this.validate(price))
            return new Price(price)
    }

    static validate(price: number) {
        if (price < 0 || typeof price !== 'number')
            return false
        return true
    }
}