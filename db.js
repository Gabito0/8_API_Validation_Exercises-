/** Database config for database. */

const { Client } = require("pg");
const { DB_URI } = require("./config");

let db = new Client({
  connectionString: DB_URI,
});

db.connect((err) => {
  if (err) {
    console.log("Failed to connect", err);
  }
  console.log("Success connected to", DB_URI);
});

module.exports = db;
