import { addProduct, schemaProduct } from './product'

export default
  {
    "swagger": "2.0",
    "info": {
      "version": "1.0.0",
      "title": "Product API",
      "description": "Product Clean Architecture API"
    },
    "host": "localhost:3000",
    "basePath": "/",
    "schemes": ["http"],
    "consumes": ["application/json"],
    "produces": ["application/json"],
    "paths": { ...addProduct },
    "definitions": { ...schemaProduct }
  }
