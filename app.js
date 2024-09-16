//! [Core Modules] -- Do not Delete
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
//! [Core Modules] -- Do not Delete

//*  [Routers & Redirect Routers] imports
const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const newsRouter = require('./routes/news');
const githubRedirectRouter = require('./routes/github');
const homeRedirectRouter = require('./routes/home');
//*  [Routers & Redirect Routers] imports

const app = express();

//* [View Engine] setups
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//* [View Engine] setups

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//* Use [Routers & Redirect Routers]
app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/news', newsRouter);
app.use('/github', githubRedirectRouter);
app.use('/home', homeRedirectRouter);
//* Use [Routers & Redirect Routers]

//! [Error Handler] -- Do not Delete
app.use(function (req, res, next) {
	next(createError(404));
});
app.use(function (err, req, res, next) {
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
	res.status(err.status || 500);
	res.render('error');
});
//! [Error Handler] -- Do not Delete

module.exports = app;
