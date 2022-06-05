import { HttpRequest, HttpResponse } from '../ports'
import { FindOneByName } from '../../../use-cases/product/find-one-by-name-product';
import { created } from '../util'

export class FindOneByNameController {

  private usecase: FindOneByName;

  constructor(usecase: FindOneByName) {
    this.usecase = usecase;
  }

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const res = await this.usecase.perform(request.body)
    return created(res)
  }
}