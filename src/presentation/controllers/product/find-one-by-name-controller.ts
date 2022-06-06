import { HttpRequest, HttpResponse } from '../ports'
import { FindOneByName } from '../../../use-cases/product/find-one-by-name';
import { ok } from '../util'

export class FindOneByNameController {

  private usecase: FindOneByName;

  constructor(usecase: FindOneByName) {
    this.usecase = usecase;
  }

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const res = await this.usecase.perform(request.params.name)
    return ok(res)
  }
}