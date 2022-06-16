export class InvalidPriceError extends Error {
	public readonly value = 'InvalidPriceError'
	constructor(price: number) {
		super('Invalid price: ' + price + '.')
	}
}
