-- 001_create_members.sql
-- Members table for NPCWS welfare society

CREATE TABLE IF NOT EXISTS members (
  id            SERIAL PRIMARY KEY,
  full_name     VARCHAR(200)  NOT NULL,
  phone         VARCHAR(15)   NOT NULL UNIQUE,
  email         VARCHAR(255),
  aadhaar_last4 CHAR(4),
  membership_tier VARCHAR(20) NOT NULL DEFAULT 'basic'
    CHECK (membership_tier IN ('basic', 'standard', 'premium')),
  status        VARCHAR(20)   NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending', 'approved', 'active', 'suspended', 'expired')),
  created_at    TIMESTAMPTZ   NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMPTZ   NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_members_phone ON members (phone);
CREATE INDEX idx_members_status ON members (status);
