const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const app = require('../app');

// const bodyParser = require('body-parser');
// // create application/json parser
// var jsonParser = bodyParser.raw(this.options);

// // app.use(bodyParser.json());

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

/* GET siswa listing. */
router.get('/', function (req, res, next) {
    let sql = "SELECT * FROM tb_students";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": false, "response": results }));
    });
});

/* POST siswa. */
router.post('/', function (req, res, next) {
    let body = req.body;
    console.log(body);
    let data = { name: body.name, age: body.age, gender: body.gender };
    // let data = { nama: req.body.nama, tgl_lahir: req.body.tgl_lahir, email: req.body.email, no_hp: req.body.no_hp, jenis_kelamin: req.body.jenis_kelamin  };

    let sql = "INSERT INTO tb_students SET ?";
    conn.query(sql, data, (err, results) => {
        if (err) { 
            res.send(JSON.stringify({ "status": 400, "error": true, "response": "can't get data from raw body" }));
            return;
        }
        res.send(JSON.stringify({ "status": 200, "error": false, "response": results }));
    });
});

module.exports = router;