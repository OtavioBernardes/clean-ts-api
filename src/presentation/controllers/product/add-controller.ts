import { HttpRequest } from '../ports'
import { AddProduct } from '../../../use-cases/product';
import { created, badRequest, conflitRequest, serverError } from '../util'

export class AddProductController {

	private usecase: AddProduct;

	constructor(usecase: AddProduct) {
		this.usecase = usecase;
	}

	async handle(request: HttpRequest): Promise<any> {
		try {
			if (!await this.validateRequest(request))
				return badRequest({ message: 'This route requires: name and price!' })

			const res = await this.usecase.perform(request.body)

			if (res.isLeft())
				return conflitRequest({ message: res.value })

			return created(res.value)
		} catch (error) {
			return serverError(error)
		}
	}

	async validateRequest(request: HttpRequest): Promise<boolean> {
		const { name, price } = request.body;
		return !!name && !!price
	}
}