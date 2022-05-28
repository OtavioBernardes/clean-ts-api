import { HttpRequest, HttpResponse } from './ports'
import { addProduct } from '../../use-cases/product/save'
import { created } from './util'

export class ProductController {

    constructor(
        private readonly addProduct: addProduct
    ) { }

    async save(request: HttpRequest): Promise<HttpResponse> {
        const res = await this.addProduct.handle(request.body)
        return created(res)
    }
}