import { Router } from 'express'
import { query } from '../config/db.js'

const router = Router()

// List payments for a member
router.get('/member/:memberId', async (req, res, next) => {
  try {
    const result = await query(
      'SELECT id, amount, currency, status, razorpay_order_id, created_at FROM payments WHERE member_id = $1 ORDER BY created_at DESC',
      [req.params.memberId]
    )
    res.json(result.rows)
  } catch (err) {
    next(err)
  }
})

// Create a payment record (called before Razorpay checkout)
router.post('/', async (req, res, next) => {
  try {
    const { member_id, amount, purpose } = req.body

    if (!member_id || !amount) {
      return res.status(400).json({ error: 'member_id and amount are required' })
    }

    const result = await query(
      `INSERT INTO payments (member_id, amount, purpose)
       VALUES ($1, $2, $3)
       RETURNING id, member_id, amount, purpose, status, created_at`,
      [member_id, amount, purpose || 'membership']
    )
    res.status(201).json(result.rows[0])
  } catch (err) {
    next(err)
  }
})

// Razorpay webhook (Phase 2 — verify signature before processing)
router.post('/webhook', async (req, res, next) => {
  try {
    // TODO: Verify Razorpay webhook signature
    const { razorpay_order_id, razorpay_payment_id, status } = req.body

    await query(
      `UPDATE payments SET razorpay_order_id = $1, razorpay_payment_id = $2, status = $3, updated_at = NOW()
       WHERE razorpay_order_id = $1`,
      [razorpay_order_id, razorpay_payment_id, status]
    )
    res.json({ received: true })
  } catch (err) {
    next(err)
  }
})

export default router
