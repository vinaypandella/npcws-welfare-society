import { Router } from 'express'
import { healthCheck } from '../config/db.js'

const router = Router()

// Liveness — is the process running?
router.get('/healthz', (_req, res) => {
  res.json({ status: 'ok' })
})

// Readiness — can we serve traffic (DB connected)?
router.get('/readyz', async (_req, res) => {
  try {
    await healthCheck()
    res.json({ status: 'ready', db: 'connected' })
  } catch {
    res.status(503).json({ status: 'not ready', db: 'disconnected' })
  }
})

export default router
