import { Router } from 'express'
import ProductRouter from './product-routes'
import swaggerUi from "swagger-ui-express"
import swaggerDocs from '../../external/swagger/swagger'

const router = Router()

router.post('/', (request, response) => {
	return response.send({
		message: `Hello World`,
	});
});

router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
router.use('/api/', ProductRouter)

export default router;