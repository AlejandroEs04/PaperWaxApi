import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import { corsOptions } from './config/cors'

import paperTypeRoutes from './routes/PaperTypeRoutes'
import productRoutes from './routes/ProductController'

dotenv.config()

const app = express()

app.use(morgan('dev'))
app.use(express.json())

app.use(cors(corsOptions))

app.use('/api/papers', paperTypeRoutes)
app.use('/api/products', productRoutes)

export default app