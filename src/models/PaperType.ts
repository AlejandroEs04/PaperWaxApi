import { ActiveRecord } from "./ActiveRecord"

export default class PaperType extends ActiveRecord<PaperType> {
    public id?: number 
    public name: string 

    constructor(item?: PaperType) {
        super('PaperType')
        this.id = item?.id
        this.name = item?.name ?? ''
    }
}