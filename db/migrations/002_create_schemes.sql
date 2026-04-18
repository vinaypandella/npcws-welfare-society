-- 002_create_schemes.sql
-- Welfare schemes offered by NPCWS

CREATE TABLE IF NOT EXISTS schemes (
  id          SERIAL PRIMARY KEY,
  name        VARCHAR(200)  NOT NULL,
  category    VARCHAR(50)   NOT NULL
    CHECK (category IN ('housing', 'health', 'education')),
  description TEXT          NOT NULL,
  eligibility TEXT,
  active      BOOLEAN       NOT NULL DEFAULT true,
  created_at  TIMESTAMPTZ   NOT NULL DEFAULT NOW(),
  updated_at  TIMESTAMPTZ   NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_schemes_category ON schemes (category);
