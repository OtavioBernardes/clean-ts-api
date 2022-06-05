import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter';
import { makeAddProductController } from '../factories/controllers/add-product-factory';
import { makeFindAllController } from '../factories/controllers/find-all-product-factory';
import { makeFindOneByNameController } from '../factories/controllers/find-one-by-name-factory';

const router = Router()

router.get('/product/:name', adaptRoute(makeFindOneByNameController()))
router.post('/product', adaptRoute(makeAddProductController()))
router.get('/product/', adaptRoute(makeFindAllController()))
export default router