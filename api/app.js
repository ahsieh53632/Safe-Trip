var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var mysql = require('mysql');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var LoginRouter = require('./routes/Login');
var MainPageRouter = require('./routes/MainPage')
var CheckRouter = require('./routes/CheckPage')
var QRRouter = require('./routes/QRPage')
var uuid = require('uuid');
var app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '!Alex3638',
  database: 'safe-trip'
});




// var insertleo = "INSERT INTO person (`account`, `password`, `name`, `phone`, `condition`, `address`) \
// VALUES ('leo', '123', 'leo', '09', 'NORMAL', '123');"

// //test code
// connection.query(insertleo, function (err, result){
//   if (err) throw err;
//   console.log(result)
// })

//


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/LoginPage', LoginRouter);
app.use('/MainPage', MainPageRouter);
app.use('/MainPage/CheckPage/CheckPage', MainPageRouter);
app.use('/MainPage/MyQRcode', QRRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
