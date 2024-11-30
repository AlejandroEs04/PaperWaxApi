"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ActiveRecord_1 = require("./ActiveRecord");
class Product extends ActiveRecord_1.ActiveRecord {
    id;
    name;
    price;
    stock;
    active;
    paperId;
    constructor(item) {
        super('Product');
        this.id = item?.id;
        this.name = item?.name;
        this.price = item?.price;
        this.stock = item?.stock;
        this.active = item?.active ?? 1;
        this.paperId = item?.paperId;
    }
}
exports.default = Product;
//# sourceMappingURL=Product.js.map