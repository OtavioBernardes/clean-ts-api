import { ProductData } from '../../domain'
import { ProductRepository } from '../../use-cases/product/ports/product-repository'
import { db } from './helper'
import { OkPacket, RowDataPacket } from "mysql2";

export class MysqlProductRepository implements ProductRepository {

    save(product: ProductData): Promise<any> {
        const queryString = `INSERT INTO product (name, price) VALUES ('${product.name}', ${product.price})`

        return new Promise((resolve, reject) => {
            db.query(queryString,
                (err, result) => {
                    if (err) reject(err)
                    resolve(<OkPacket>result)
                }
            );
        });
    }

    async findOneByName(name: string): Promise<any> {
        const queryString = `SELECT * FROM product where name = '${name}'`

        return new Promise((resolve, reject) => {
            db.query(queryString,
                (err, result) => {
                    if (err) reject(err)
                    resolve(<OkPacket>result)
                }
            );
        });
    }
}