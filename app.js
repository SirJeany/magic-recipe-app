var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Connect to Mongo db using mongoose:
// mongoose.connect('mongodb+srv://mflix_guy:s12572@mflix-vx5yh.gcp.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true ,  useUnifiedTopology: true });
mongoose.connect('mongodb://localhost/runes', { useNewUrlParser: true,  useUnifiedTopology: true });

// Define routes
var indexRouter = require('./routes/index');
var view_runeRouter = require('./routes/view_rune');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
// support parsing of application/json type post data
app.use(bodyParser.json());

// Register routes after middleware
app.use('/', indexRouter);
app.use('/view_rune', view_runeRouter);

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
