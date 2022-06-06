import { HttpRequest, HttpResponse } from '../ports'
import { DeleteProduct } from '../../../use-cases/product'
import { created } from '../util'

export class DeleteProductController {

  private usecase: DeleteProduct;

  constructor(usecase: DeleteProduct) {
    this.usecase = usecase;
  }

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const res = await this.usecase.perform(request.params.id)
    return created(res)
  }
}