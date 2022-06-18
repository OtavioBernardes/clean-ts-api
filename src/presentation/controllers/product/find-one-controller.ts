import { HttpRequest, HttpResponse } from '../../ports'
import { FindOne } from '../../../use-cases/product';
import { notFoundRequest, ok } from '../../helpers'

export class FindOneController {

	private usecase: FindOne;

	constructor(usecase: FindOne) {
		this.usecase = usecase;
	}

	async handle(request: HttpRequest): Promise<HttpResponse> {
		const res = await this.usecase.perform(request.params.name)
		if (res.length === 0)
			return notFoundRequest({ message: 'Not found!' })

		return ok(res)
	}
}