require('dotenv').config();

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const studentsRouter = require('./routes/siswaController');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const bodyParser = require('body-parser');
bodyParser.raw(this.options);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/siswa', bodyParser, studentsRouter);

module.exports = app;
