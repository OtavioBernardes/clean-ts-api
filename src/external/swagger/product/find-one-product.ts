export const findOne = {
	"get": {
		"tags": [
			"Products"
		],
		"description": "Get one product in system by name",
		"parameters": [
			{
				"name": "id",
				"in": "path",
				"required": true,
				"description": "ID of product that we want to find",
				"type": "number"
			}
		],
		"responses": {
			"200": {
				"description": "OK",
				"schema": {
					"$ref": "#/definitions/Product"
				}
			},
			"404": {
				"description": "Not found",
			},
		}
	}

}