export class InvalidPriceError extends Error {
    public readonly name = 'InvalidPriceError'
    constructor (price: number) {
      super('Invalid price: ' + price + '.')
    }
  }
  