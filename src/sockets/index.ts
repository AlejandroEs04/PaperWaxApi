import { Server, Socket } from 'socket.io';

export default function registerSocketEvents(io: Server) {
        io.on('connection', (socket: Socket) => {
            console.log(`Client connected: ${socket.id}`);
            // Manejar eventos
        });
  }
