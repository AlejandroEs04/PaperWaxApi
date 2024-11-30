import { Request, Response } from "express";
export declare class PaperTypeController {
    static getAllPaperType: (req: Request, res: Response) => Promise<void>;
    static createPaperType: (req: Request, res: Response) => Promise<void>;
    static updatePaperType: (req: Request, res: Response) => Promise<void>;
}
