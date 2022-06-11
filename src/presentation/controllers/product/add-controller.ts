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
      if (!res)
        return conflitRequest({ message: 'This product already exists in the database!' })

      return created(res)
    } catch (error) {
      return serverError(error)
    }
  }

  async validateRequest(request: HttpRequest): Promise<boolean> {
    const { name, price } = request.body;
    return !!name && !!price
  }
}