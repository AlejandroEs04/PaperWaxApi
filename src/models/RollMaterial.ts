import { ActiveRecord } from "./ActiveRecord";

export default class RollMaterial extends ActiveRecord<RollMaterial> {
    public id: number
    public lot: string 
    public weight: number 
    public paperId: number 

    constructor(item?: RollMaterial) {
        super('RollMaterial')
        this.id = item?.id
        this.lot = item?.lot
        this.weight = item?.weight
        this.paperId = item?.paperId
    }

    async createWithId(item: RollMaterial): Promise<RollMaterial> {
        const keys = Object.keys(item).filter((key) => key !== "tableName");
        const values = keys.map((key) => `@${key}`).join(", ");
        const query = `INSERT INTO [paperWaxDb].[RollMaterial] (${keys.join(", ")}) OUTPUT INSERTED.id, INSERTED.lot VALUES (${values})`;
    
        try {
            const request = await this.getRequest();
            keys.forEach((key) => request.input(key, (item as any)[key]));
            const result = await request.query(query);

            const queryGetNew = `SELECT * FROM [paperWaxDb].[RollMaterial] WHERE id = @id AND lot = @lot`;

            const requestGetNewItem = await this.getRequest();

            requestGetNewItem.input("id", result.recordset[0].id);
            requestGetNewItem.input("lot", result.recordset[0].lot);

            const newItem = await request.query(queryGetNew);
            return newItem.recordset[0] as RollMaterial;
        } catch (error) {
            console.error(error);
            throw new Error("Error creating record");
        }
    }

    async updateWithId(id: number, lot: string, item: Partial<RollMaterial>): Promise<void> {
        const keys = Object.keys(item).filter((key) => key !== "tableName" && key !== "id" && key !== 'lot');
        const setString = keys.map((key) => `${key} = @${key}`).join(", ");
        const query = `UPDATE [paperWaxDb].[RollMaterial] SET ${setString} WHERE id = @id AND lot = @lot`;
    
        try {
            const request = await this.getRequest();
            keys.forEach((key) => request.input(key, (item as any)[key]));
            request.input("id", id);
            request.input("lot", lot);
            await request.query(query);
        } catch (error) {
            console.error(error);
            throw new Error("Error updating record");
        }
    }
}