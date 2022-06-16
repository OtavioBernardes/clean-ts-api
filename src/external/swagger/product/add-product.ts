export const addProduct = {
  "post": {
    "tags": [
      "Products"
    ],
    "description": "Create new product in system",
    "parameters": [
      {
        "name": "product",
        "in": "body",
        "schema": {
          "$ref": "#/definitions/Product"
        }
      }
    ],
    "produces": [
      "application/json"
    ],
    "responses": {
      "201": {
        "description": "New product is created",
        "schema": {
          "$ref": "#/definitions/Product"
        }
      },
      "409": {
        "description": "This product already exists in the database!",
      }
    }
  }
}