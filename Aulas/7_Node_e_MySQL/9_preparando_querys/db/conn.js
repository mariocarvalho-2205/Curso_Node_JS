const mysql = require("mysql");
const { createPool } = require("mysql2");

const pool = createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql',
})

console.log('conectou preparando querys mysql')

module.exports = pool