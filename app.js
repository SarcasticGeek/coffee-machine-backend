var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var routes = require('./app/helpers/routes');
var middleware = require('./app/helpers/middleware');
var app = express();
require('dotenv').config();
var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to mongo database!");
  })
  .catch(() => {
    console.error("Connection to mongo database failed!!");
  });


middleware(app);

routes(app);


module.exports = app;
