const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

const { DB_HOST, DB_NAME, DB_USER, DB_PASS } = process.env;

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
router.post('/', function (req, res, next) {
    // let rawData = req;
    // console.log(rawData);
    let data = { nama: req.body.nama, tgl_lahir: req.body.tgl_lahir, email: req.body.email, no_hp: req.body.no_hp, jenis_kelamin: req.body.jenis_kelamin  };
    let sql = "INSERT INTO users SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});

module.exports = router;