import { Router } from 'express'
import ProductController from '../../ports/controllers/product.controller';

const router = Router()
router.post('/product', async (request, response) => {
    const httpResponse = await ProductController.save(request)
    response.status(httpResponse.statusCode).json(httpResponse.body)
})

export default router;