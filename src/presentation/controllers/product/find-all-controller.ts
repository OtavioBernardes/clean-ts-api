import { HttpResponse } from '../../ports'
import { FindAll } from '../../../use-cases/product';
import { ok } from '../../helpers'

export class FindAllController {

	private usecase: FindAll;

	constructor(usecase: FindAll) {
		this.usecase = usecase;
	}

	async handle(): Promise<HttpResponse> {
		const res = await this.usecase.perform()
		return ok(res)
	}
}