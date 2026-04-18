import { Router } from 'express'
import { query } from '../config/db.js'

const router = Router()

// List all members
router.get('/', async (_req, res, next) => {
  try {
    const result = await query(
      'SELECT id, full_name, phone, membership_tier, status, created_at FROM members ORDER BY created_at DESC'
    )
    res.json(result.rows)
  } catch (err) {
    next(err)
  }
})

// Get single member
router.get('/:id', async (req, res, next) => {
  try {
    const result = await query(
      'SELECT id, full_name, phone, email, aadhaar_last4, membership_tier, status, created_at FROM members WHERE id = $1',
      [req.params.id]
    )
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Member not found' })
    }
    res.json(result.rows[0])
  } catch (err) {
    next(err)
  }
})

// Register new member
router.post('/', async (req, res, next) => {
  try {
    const { full_name, phone, email, aadhaar_last4, membership_tier } = req.body

    if (!full_name || !phone || !membership_tier) {
      return res.status(400).json({
        error: 'full_name, phone, and membership_tier are required',
      })
    }

    const result = await query(
      `INSERT INTO members (full_name, phone, email, aadhaar_last4, membership_tier)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, full_name, phone, membership_tier, status, created_at`,
      [full_name, phone, email || null, aadhaar_last4 || null, membership_tier]
    )
    res.status(201).json(result.rows[0])
  } catch (err) {
    next(err)
  }
})

export default router
