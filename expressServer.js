const express = require('express');
const app = express();
const pets = require('./pets.json');

app.listen('3000', function () {
  console.log('hello');
});

app.get('/pets', function (req, res, next) {
  res.status('200').send(pets);
});

app.get('/pets/:id', function (req, res, next) {
  if (pets[req.params.id] === undefined) {
    res.set('Content-type', 'text/plain');
    res.status(404).send('Not Found');
  }
  else {
    res.status('200').send(pets[req.params.id]);
  }
});

module.exports = app;
