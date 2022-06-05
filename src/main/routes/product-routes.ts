import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter';
import { makeAddProductController } from '../factories/controllers/add-product-factory';
import { makeFindOneByNameController } from '../factories/controllers/find-one-by-name-factory';

const router = Router()

router.post('/product', adaptRoute(makeAddProductController()))
router.get('/product/:name', adaptRoute(makeFindOneByNameController()))

export default router