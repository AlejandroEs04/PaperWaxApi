import { ActiveRecord } from "./ActiveRecord";

export default class Product extends ActiveRecord<Product> {
    public id?: number 
    public name: string 
    public price: number 
    public stock: number 
    public active: number 
    public paperId: number 

    constructor(item?: Product) {
        super('Product')
        this.id = item?.id
        this.name = item?.name
        this.price = item?.price
        this.stock = item?.stock
        this.active = item?.active ?? 1
        this.paperId = item?.paperId
    }
}