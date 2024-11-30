import { ActiveRecord } from "./ActiveRecord";
export default class Product extends ActiveRecord<Product> {
    id?: number;
    name: string;
    price: number;
    stock: number;
    active: number;
    paperId: number;
    constructor(item?: Product);
}
