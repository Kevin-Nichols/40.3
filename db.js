/** Database for lunchly */

const pg = require("pg");

const db = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'lunchly',
  password: '3210',
  port: 5432,
});

db.connect();

module.exports = db;
