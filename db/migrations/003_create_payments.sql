-- 003_create_payments.sql
-- Payment records for membership fees and scheme contributions

CREATE TABLE IF NOT EXISTS payments (
  id                  SERIAL PRIMARY KEY,
  member_id           INTEGER       NOT NULL REFERENCES members(id),
  amount              NUMERIC(10,2) NOT NULL,
  currency            CHAR(3)       NOT NULL DEFAULT 'INR',
  purpose             VARCHAR(50)   NOT NULL DEFAULT 'membership',
  status              VARCHAR(20)   NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending', 'captured', 'failed', 'refunded')),
  razorpay_order_id   VARCHAR(100),
  razorpay_payment_id VARCHAR(100),
  created_at          TIMESTAMPTZ   NOT NULL DEFAULT NOW(),
  updated_at          TIMESTAMPTZ   NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_payments_member ON payments (member_id);
CREATE INDEX idx_payments_status ON payments (status);
