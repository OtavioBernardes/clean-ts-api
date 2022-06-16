export const findAllProduct = {
  "get": {
    "tags": [
      "Products"
    ],
    "description": "Get all products in system",
    "responses": {
      "200": {
        "description": "OK",
        "schema": {
          "$ref": "#/definitions/Product"
        }
      },
    }
  }
}