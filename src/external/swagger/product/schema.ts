export const schemaProduct = {
  "Product": {
    "required": [
      "name",
      "_id",
      "price"
    ],
    "properties": {
      "name": {
        "type": "string"
      },
      "price": {
        "type": "number"
      }
    }
  },
}