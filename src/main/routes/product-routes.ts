import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter';
import { makeAddProductController } from '../factories/controllers/product/add-factory';
import { makeDeleteProductController } from '../factories/controllers/product/delete-factory';
import { makeFindAllController } from '../factories/controllers/product/find-all-factory';
import { makeFindOneController } from '../factories/controllers/product/find-one-factory';

const router = Router()

router.get('/product/:name', adaptRoute(makeFindOneController()))
router.post('/product', adaptRoute(makeAddProductController()))
router.get('/product/', adaptRoute(makeFindAllController()))
router.delete('/product/:id', adaptRoute(makeDeleteProductController()))

export default router