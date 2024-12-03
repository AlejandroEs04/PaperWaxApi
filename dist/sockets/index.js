"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = registerSocketEvents;
function registerSocketEvents(io) {
    io.on('connection', (socket) => {
        console.log(`Client connected: ${socket.id}`);
        // Manejar eventos
    });
}
//# sourceMappingURL=index.js.map