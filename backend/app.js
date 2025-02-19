var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');


var indexRouter = require('./routes/index');
var todoRouter = require('./routes/todo');
const connectDB = require('./config/dbconnect');

var app = express();

connectDB()

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use(require('./routes/todo'));
app.use('/', indexRouter);
app.use('/todo', todoRouter);


module.exports = app;
