import { ProductData } from '../../domain'
import { ProductRepository } from '../../use-cases/product/ports/product-repository'
import Connection from './ports/connection';

export class ProductRepositoryDatabase implements ProductRepository {

    constructor(readonly connection: Connection) { }

    save(product: ProductData): Promise<any> {
        const query = `INSERT INTO product (name, price) VALUES ('${product.name}', ${product.price})`
        return this.connection.query(query)
    }

    async findOne(id: number): Promise<any> {
        const query = `SELECT * FROM product WHERE id = '${id}'`
        return this.connection.query(query)
    }

    async findAll(): Promise<any[]> {
        const query = `SELECT * FROM product`
        return this.connection.query(query)

    }

    async delete(id: number): Promise<any> {
        const query = `DELETE FROM product where id = '${id}' `
        return this.connection.query(query)

    }

    async exists(name: string): Promise<any> {
        const query = `SELECT * FROM product WHERE name = '${name}'`
        return this.connection.query(query)
    }
}