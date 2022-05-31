import { HttpRequest, HttpResponse } from '../ports'
import { AddProduct } from '../../../use-cases/product/add-product'
import { created } from '../util'

export class ProductController {

  constructor(
    private readonly addProduct: AddProduct
  ) { }

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const res = await this.addProduct.handle(request.body)
    return created(res)
  }
}