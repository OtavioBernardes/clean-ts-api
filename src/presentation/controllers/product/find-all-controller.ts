import { HttpResponse } from '../ports'
import { FindAll } from '../../../use-cases/product/find-all-product';
import { ok } from '../util'

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