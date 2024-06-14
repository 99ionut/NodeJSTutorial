const pg = require("pg");

const pool = new pg.Pool({
    host:"localhost",
    user:"postgres",
    port: 5432,
    password:"Dimensionatore",
    database:"postgres"
})

const query = async (text, params, callback) => {
  res =  await pool.query(text, params, callback)
  console.log("row count "+ res.rowCount);
  return res
}

module.exports = { query };
