import { Request, Response } from "express"
import Product from "../models/Product"

export class ProductController {
    static getAllProduct = async(req: Request, res: Response) => {
        try {
            const products = await new Product().getAll()
            res.json(products)
            return
        } catch (error) {
            res.status(500).send('Hubo un error al obtener la información')
            return
        }
    }

    static createProduct = async(req: Request, res: Response) => {
        const product = new Product(req.body)

        try {
            await product.create(product)
            res.send('Producto registrado correctamente')
            return
        } catch (error) {
            res.status(500).send('Hubo un error al ejecutar la solicitud')
            return
        }
    }

    static updateProduct = async(req: Request, res: Response) => {
        const product = new Product(req.body)
        const { id } = req.params

        try {
            await product.update(id, product)
            res.send('Producto actualizado correctamente')
            return
        } catch (error) {
            res.status(500).send('Hubo un error al ejecutar la solicitud')
            return
        }
    }
}