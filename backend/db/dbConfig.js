const mysql2 = require("mysql2");
require("dotenv").config();

const dbConnection = mysql2.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 3306,
  connectionLimit: 10,
});

module.exports = dbConnection.promise();
