import { Controller } from '../../presentation/ports/controller'
import { HttpRequest } from '../../presentation/controllers/ports'
import { Request, Response } from 'express'

export const adaptRoute = (controller: Controller) => {
	return async (req: Request, res: Response) => {
		const httpRequest: HttpRequest = {
			body: req.body,
			params: req.params
		}
		const httpResponse = await controller.handle(httpRequest)
		res.status(httpResponse.statusCode).json(httpResponse.body)
	}
}