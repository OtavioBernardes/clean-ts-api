# Criar Produto

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **POST** na rota **/api/product**
2. ✅ Valida dados obrigatórios **name** e **price**
3. ✅ **Cria** um produto com os dados fornecidos
4. ✅ Retorna **201**, com dados

> ## Exceções

1. ✅ Retorna erro **400** se name ou price não forem fornecidas.
2. ✅ Retorna erro **409** se já houver o registro do produto no banco.
3. ✅ Retorna erro **400** se o price for negativo.