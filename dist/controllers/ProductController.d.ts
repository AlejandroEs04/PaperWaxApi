import { Request, Response } from "express";
export declare class ProductController {
    static getAllProduct: (req: Request, res: Response) => Promise<void>;
    static createProduct: (req: Request, res: Response) => Promise<void>;
    static updateProduct: (req: Request, res: Response) => Promise<void>;
}
