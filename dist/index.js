"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const colors_1 = __importDefault(require("colors"));
const port = process.env.PORT || 4000;
server_1.httpServer.listen(port, () => {
    console.log(colors_1.default.cyan(`REST API working in port http://localhost:${port}`));
});
//# sourceMappingURL=index.js.map