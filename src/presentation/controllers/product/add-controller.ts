import { HttpRequest, HttpResponse } from '../ports'
import { AddProduct } from '../../../use-cases/product/add';
import { created } from '../util'

export class AddProductController {

  private usecase: AddProduct;

  constructor(usecase: AddProduct) {
    this.usecase = usecase;
  }

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const res = await this.usecase.perform(request.body)
    return created(res)
  }
}