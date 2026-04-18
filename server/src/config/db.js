import pg from 'pg'

const pool = new pg.Pool({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  database: process.env.DB_NAME || 'npcws',
  user: process.env.DB_USER || 'npcws',
  password: process.env.DB_PASSWORD || 'npcws_dev',
})

pool.on('error', (err) => {
  console.error('Unexpected database pool error:', err)
})

export async function query(text, params) {
  const result = await pool.query(text, params)
  return result
}

export async function healthCheck() {
  const result = await pool.query('SELECT 1')
  return result.rowCount === 1
}

export default pool
