"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaperTypeController = void 0;
const PaperType_1 = __importDefault(require("../models/PaperType"));
class PaperTypeController {
    static getAllPaperType = async (req, res) => {
        try {
            const paper = await new PaperType_1.default().getAll();
            res.json(paper);
            return;
        }
        catch (error) {
            res.status(500).send('Hubo un error al obtener la información');
            return;
        }
    };
    static createPaperType = async (req, res) => {
        const paper = new PaperType_1.default(req.body);
        try {
            await paper.create(paper);
            res.send('Tipo de papel creado correctamente');
            return;
        }
        catch (error) {
            res.status(500).send('Hubo un error al ejecutar la solicitud');
            return;
        }
    };
    static updatePaperType = async (req, res) => {
        const paper = new PaperType_1.default(req.body);
        const { id } = req.params;
        try {
            await paper.update(id, paper);
            res.send('Tipo de papel actualizado correctamente');
            return;
        }
        catch (error) {
            res.status(500).send('Hubo un error al ejecutar la solicitud');
            return;
        }
    };
}
exports.PaperTypeController = PaperTypeController;
//# sourceMappingURL=PaperTypeController.js.map