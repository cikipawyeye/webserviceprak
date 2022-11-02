const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

const {DB_HOST, DB_NAME, DB_USER, DB_PASS} = process.env;

//create database connection
const conn = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME
});

//connect to database
conn.connect((err) => {
    if (err) throw err;
    console.log('Mysql Connected...');
});

/* GET users listing. */
router.get('/', function (req, res, next) {
    let sql = "SELECT * FROM users";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});

module.exports = router;