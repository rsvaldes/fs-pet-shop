/* jshint esversion: 6 */
const express = require('express');
const app = express();
const router = require('./routes.js');

const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(bodyParser.json());
app.use(router);

app.use(function(req,res,next) {
  res.status(404).send('Not Found');
});

app.listen('3000', function () {
  console.log('hello world');
});

module.exports = app;
