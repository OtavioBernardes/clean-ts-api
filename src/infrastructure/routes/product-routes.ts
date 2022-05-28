import { Router } from 'express'
import { ProductController } from '../../ports/controllers/product.controller';
import { addProduct } from '../../use-cases/product/save';

const router = Router()
const controller = new ProductController(new addProduct())

router.post('/product', async (request, response) => {
    const httpResponse = await controller.save(request)
    response.status(httpResponse.statusCode).json(httpResponse.body)
})

export default router;