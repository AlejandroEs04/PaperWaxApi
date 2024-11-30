"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ActiveRecord_1 = require("./ActiveRecord");
class PaperType extends ActiveRecord_1.ActiveRecord {
    id;
    name;
    constructor(item) {
        super('PaperType');
        this.id = item?.id;
        this.name = item?.name ?? '';
    }
}
exports.default = PaperType;
//# sourceMappingURL=PaperType.js.map