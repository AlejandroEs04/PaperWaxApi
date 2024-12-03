"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpServer = void 0;
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const cors_2 = require("./config/cors");
const PaperTypeRoutes_1 = __importDefault(require("./routes/PaperTypeRoutes"));
const ProductController_1 = __importDefault(require("./routes/ProductController"));
const sockets_1 = __importDefault(require("./sockets"));
dotenv_1.default.config();
const app = (0, express_1.default)();
exports.httpServer = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(exports.httpServer, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
    },
});
app.use((req, res, next) => {
    req['io'] = io; // Añadimos io al objeto req
    next();
});
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use((0, cors_1.default)(cors_2.corsOptions));
app.use('/api/papers', PaperTypeRoutes_1.default);
app.use('/api/products', ProductController_1.default);
(0, sockets_1.default)(io);
exports.default = app;
//# sourceMappingURL=server.js.map