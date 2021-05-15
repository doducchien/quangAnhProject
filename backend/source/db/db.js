const mysql = require('mysql')
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '0000',
    database: process.env.DB_NAME || 'BOOKCAR',
    port: process.env.DB_PORT || '3306'
    // host: process.env.DB_HOST ,
    // user: process.env.DB_USER ,
    // password: process.env.DB_PASS ,
    // database: process.env.DB_NAME ,
    // port: process.env.DB_PORT 
})

module.exports = db;