var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var postRouter = require('./routes/post');
var Api = require('./api');

// this is the remote url used for showing
// the 'live' cover image on the server
process.env['url'] = 'https://renrizzolo.com/';

var app = express();

var api = new Api();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/create', api.createProject);
app.post('/api/update', api.updateProject);
app.post('/api/delete', api.deleteProject);
app.post('/api/upload', api.uploadImage);

app.use('/', indexRouter);
app.use('/post', postRouter);

// serve front-end static assets so there
// aren't broken images for projects
app.use(express.static(path.join(__dirname, '../src/')));
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
