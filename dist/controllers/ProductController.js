"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const Product_1 = __importDefault(require("../models/Product"));
class ProductController {
    static getAllProduct = async (req, res) => {
        try {
            const products = await new Product_1.default().getAll();
            res.json(products);
            return;
        }
        catch (error) {
            res.status(500).send('Hubo un error al obtener la información');
            return;
        }
    };
    static createProduct = async (req, res) => {
        const product = new Product_1.default(req.body);
        try {
            const response = await product.create(product);
            // const io: Server = req['io'];
            // io.emit('paperTypeAdded', newPaperType);
            res.send('Producto registrado correctamente');
            return;
        }
        catch (error) {
            res.status(500).send('Hubo un error al ejecutar la solicitud');
            return;
        }
    };
    static updateProduct = async (req, res) => {
        const product = new Product_1.default(req.body);
        const { id } = req.params;
        try {
            const response = await product.update(id, product);
            console.log(response);
            res.send('Producto actualizado correctamente');
            return;
        }
        catch (error) {
            res.status(500).send('Hubo un error al ejecutar la solicitud');
            return;
        }
    };
}
exports.ProductController = ProductController;
//# sourceMappingURL=ProductController.js.map