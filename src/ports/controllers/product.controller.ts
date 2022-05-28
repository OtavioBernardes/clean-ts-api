import { HttpRequest, HttpResponse } from './ports'
import { created } from './util'

class ProductController {
    async save(request: HttpRequest): Promise<HttpResponse> {
        return created(request.body)
    }
}

export default new ProductController()