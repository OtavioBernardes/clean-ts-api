import { Router } from 'express'
import ProductRouter from './product-routes'

const router = Router()

router.post('/', (request, response) => {
    return response.send({
        message: `Hello World`,
    });
});

router.use(ProductRouter)

export default router;