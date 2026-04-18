import { Router } from 'express'
import { query } from '../config/db.js'

const router = Router()

// List all schemes
router.get('/', async (_req, res, next) => {
  try {
    const result = await query(
      'SELECT id, name, category, description, eligibility, active, created_at FROM schemes ORDER BY category, name'
    )
    res.json(result.rows)
  } catch (err) {
    next(err)
  }
})

// Get single scheme
router.get('/:id', async (req, res, next) => {
  try {
    const result = await query(
      'SELECT * FROM schemes WHERE id = $1',
      [req.params.id]
    )
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Scheme not found' })
    }
    res.json(result.rows[0])
  } catch (err) {
    next(err)
  }
})

export default router
