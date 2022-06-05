import { HttpResponse } from "../controllers/ports"

export interface Controller<T = any> {
  handle: (request: T) => Promise<HttpResponse>
}
