import express from 'express'
import cors from 'cors'
import { config } from './config/env.js'
import { errorHandler } from './middleware/errorHandler.js'
import healthRoutes from './routes/health.js'
import memberRoutes from './routes/members.js'
import schemeRoutes from './routes/schemes.js'
import paymentRoutes from './routes/payments.js'

const app = express()

// Middleware
app.use(cors({ origin: config.corsOrigin }))
app.use(express.json())

// Routes
app.use('/api', healthRoutes)
app.use('/api/members', memberRoutes)
app.use('/api/schemes', schemeRoutes)
app.use('/api/payments', paymentRoutes)

// Error handler (must be last)
app.use(errorHandler)

app.listen(config.port, () => {
  console.log(`NPCWS API listening on port ${config.port} [${config.nodeEnv}]`)
})
