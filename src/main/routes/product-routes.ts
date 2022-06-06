import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter';
import { makeAddProductController } from '../factories/controllers/product/add-factory';
import { makeDeleteProductController } from '../factories/controllers/product/delete-factory';
import { makeFindAllController } from '../factories/controllers/product/find-all-factory';
import { makeFindOneByNameController } from '../factories/controllers/product/find-one-by-name-factory';

const router = Router()

router.get('/product/:name', adaptRoute(makeFindOneByNameController()))
router.post('/product', adaptRoute(makeAddProductController()))
router.get('/product/', adaptRoute(makeFindAllController()))
router.delete('/product/:id', adaptRoute(makeDeleteProductController()))

export default router