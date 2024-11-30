import { ActiveRecord } from "./ActiveRecord";
export default class PaperType extends ActiveRecord<PaperType> {
    id?: number;
    name: string;
    constructor(item?: PaperType);
}
