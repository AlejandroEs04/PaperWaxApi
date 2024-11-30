import express, { Application } from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import { corsOptions } from './config/cors'

import paperTypeRoutes from './routes/PaperTypeRoutes'
import productRoutes from './routes/ProductController'
import registerSocketEvents from './sockets';

dotenv.config()

const app: Application = express();
export const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  },
});

app.use((req, res, next) => {
    req['io'] = io; // Añadimos io al objeto req
    next();
});

app.use(morgan('dev'))
app.use(express.json())

app.use(cors(corsOptions))

app.use('/api/papers', paperTypeRoutes)
app.use('/api/products', productRoutes)

registerSocketEvents(io)

export default app