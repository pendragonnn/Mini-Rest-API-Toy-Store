const Pool = require('pg').Pool

const pool = new Pool({
  user: 'yourlovelyusername',
  host: 'localhost',
  database: 'toy_store',
  password: 'yourlovelypassword',
  port: 5432,
})

module.exports = pool;