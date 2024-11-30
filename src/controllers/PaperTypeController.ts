import { Request, Response } from "express"
import PaperType from "../models/PaperType"

export class PaperTypeController {
    static getAllPaperType = async(req: Request, res: Response) => {
        try {
            const paper = await new PaperType().getAll()
            res.json(paper)
            return
        } catch (error) {
            res.status(500).send('Hubo un error al obtener la información')
            return
        }
    }

    static createPaperType = async(req: Request, res: Response) => {
        const paper = new PaperType(req.body)

        try {
            await paper.create(paper)
            res.send('Tipo de papel creado correctamente')
            return
        } catch (error) {
            res.status(500).send('Hubo un error al ejecutar la solicitud')
            return
        }
    }

    static updatePaperType = async(req: Request, res: Response) => {
        const paper = new PaperType(req.body)
        const { id } = req.params

        try {
            await paper.update(id, paper)
            res.send('Tipo de papel actualizado correctamente')
            return
        } catch (error) {
            res.status(500).send('Hubo un error al ejecutar la solicitud')
            return
        }
    }
}