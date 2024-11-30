"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const cors_2 = require("./config/cors");
const PaperTypeRoutes_1 = __importDefault(require("./routes/PaperTypeRoutes"));
const ProductController_1 = __importDefault(require("./routes/ProductController"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use((0, cors_1.default)(cors_2.corsOptions));
app.use('/api/papers', PaperTypeRoutes_1.default);
app.use('/api/products', ProductController_1.default);
exports.default = app;
//# sourceMappingURL=server.js.map