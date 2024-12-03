import { ActiveRecord } from "./ActiveRecord";

export default class RollMaterial extends ActiveRecord<RollMaterial> {
    public id: number
    public lot: string 
    public weight: number 
    public paperId: number 

    constructor(item?: RollMaterial) {
        super('RollMaterial')
        this.id = item.id
        this.lot = item.lot
        this.weight = item.weight
        this.paperId = item.paperId
    }
}