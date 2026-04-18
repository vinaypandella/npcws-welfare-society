export function errorHandler(err, req, res, _next) {
  console.error(`[${req.method}] ${req.path} →`, err.message)

  const status = err.status || 500
  const message =
    status === 500 && config.nodeEnv === 'production'
      ? 'Internal server error'
      : err.message

  res.status(status).json({ error: message })
}

import { config } from '../config/env.js'
