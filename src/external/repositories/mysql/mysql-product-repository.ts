import { db } from './helper'
import { OkPacket } from "mysql2";
import { ProductData } from '../../../domain'
import { ProductRepository } from '../../../use-cases/product/ports/product-repository'

export class MysqlProductRepository implements ProductRepository {

    save(product: ProductData): Promise<any> {

        const query = `INSERT INTO product (name, price) VALUES ('${product.name}', ${product.price})`
        return new Promise((resolve, reject) => {
            db.query(query,
                (err, ) => {
                    if (err) reject(err)
                    resolve(product)
                }
            );
        });
    }

    async findOne(id: number): Promise<any> {

        const query = `SELECT * FROM product WHERE id = '${id}'`
        return new Promise((resolve, reject) => {
            db.query(query,
                (err, result) => {
                    if (err) reject(err)
                    resolve(<OkPacket>result)
                }
            );
        });
    }

    async findAll(): Promise<any[]> {

        const query = `SELECT * FROM product`
        return new Promise((resolve, reject) => {
            db.query(query,
                (err, result) => {
                    if (err) reject(err)
                    resolve(<OkPacket[]>result)
                }
            );
        });
    }

    async delete(id: number): Promise<any> {
        const query = `DELETE FROM product where id = '${id}' `
        return new Promise((resolve, reject) => {
            db.query(query,
                (err, result) => {
                    if (err) reject(err)
                    resolve(<OkPacket[]>result)
                }
            );
        });
    }

    async exists(name: string): Promise<any> {

        const query = `SELECT * FROM product WHERE name = '${name}'`
        return new Promise((resolve, reject) => {
            db.query(query,
                (err, result) => {
                    if (err) reject(err)
                    resolve(<OkPacket>result)
                }
            );
        });
    }
}