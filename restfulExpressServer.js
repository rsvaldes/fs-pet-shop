const express = require('express');
const app = express();
const router = require('./methods.js');

const pets = require('./pets.json');
const petOps = require('./petOps.js');

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(router);

app.use(function(req,res,next) {
  res.status(404).send('Not Found');
});

app.listen('3000', function () {
  console.log('hello world');
});

module.exports = app;
