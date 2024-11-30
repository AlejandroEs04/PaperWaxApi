import { Request, Response } from "express"
import Product from "../models/Product"
import { Server } from 'socket.io'

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
            const response = await product.create(product)

            // const io: Server = req['io'];
            // io.emit('paperTypeAdded', newPaperType);

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
            const response = await product.update(id, product)
            console.log(response)
            res.send('Producto actualizado correctamente')
            return
        } catch (error) {
            res.status(500).send('Hubo un error al ejecutar la solicitud')
            return
        }
    }
}