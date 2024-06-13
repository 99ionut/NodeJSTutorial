const pg = require("pg");

const pool = new pg.Pool({
    host:"localhost",
    user:"postgres",
    port: 5432,
    password:"xxx",
    database:"xxx"
})

const query = (text, params, callback) => {
  return pool.query(text, params, callback)
}

module.exports = { query };
