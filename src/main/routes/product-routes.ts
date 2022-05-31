import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter';
import { makeAddProductController } from '../factories/controllers/add-product-factory';

const router = Router()

router.post('/product', adaptRoute(makeAddProductController()))

export default router