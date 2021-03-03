const mysql = require("mysql2/promise");
require("dotenv").config();

const connect = async function () {
  const connection = mysql.createConnection({
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  });
  return connection;
};

module.exports = connect;
