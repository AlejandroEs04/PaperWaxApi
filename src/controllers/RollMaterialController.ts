import { Request, Response } from "express"
import RollMaterial from "../models/RollMaterial"
import { Server } from "socket.io"

export class RollMaterialController {
    static getAllRollMaterial = async(req: Request, res: Response) => {
        try {
            const rollsMaterial = await new RollMaterial().getAll()
            res.json(rollsMaterial)
            return
        } catch (error) {
            res.status(500).send('Hubo un error al obtener la información')
            return
        }
    }

    static createRollMaterial = async(req: Request, res: Response) => {
        const rollMaterial = new RollMaterial(req.body)

        try {
            const response = await rollMaterial.create(rollMaterial)

            const io: Server = req['io'];
            io.emit('rollMaterialAdded', response);

            res.send('Bobinado registrado correctamente')
            return
        } catch (error) {
            res.status(500).send('Hubo un error al ejecutar la solicitud')
            return
        }
    }

    static updateRollMaterial = async(req: Request, res: Response) => {
        const rollMaterial = new RollMaterial(req.body)
        const { id } = req.params

        try {
            const response = await rollMaterial.update(id, rollMaterial)
            console.log(response)
            res.send('Bobinado actualizado correctamente')
            return
        } catch (error) {
            res.status(500).send('Hubo un error al ejecutar la solicitud')
            return
        }
    }
}