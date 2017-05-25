const express = require('express');
const router = express.Router();
const pets = require('./pets.json');
const petOps = require('./petOps.js');

router.get('/pets',function(req,res,next){
  res.status(200).send(pets);
});

router.get('/pets/:id',function(req,res,next){
  if (pets[req.params.id] === undefined) {
   res.set('Content-type', 'text/plain');
   res.status(404).send('Not Found');
 }
 else {
   res.status('200').send(pets[req.params.id]);
 }
});

router.post('/pets',function(req,res,next){
  if (typeof req.body.age !== 'number' || typeof req.body.kind !== 'string' || typeof req.body.name !== 'string') {
    res.set('Content-type', 'text/plain');
    res.status(400).send('Bad Request');
  }
  else {
    res.status(200).send(req.body);
    petOps.create(req.body.age, req.body.kind, req.body.name);
  }
});

router.patch('/pets/:id', function (req,res,next) {
    console.log(pets);
    petOps.update(req.body.age, req.body.kind, req.body.name, req.params.id);
    res.status(200).send(pets[req.params.id]);
});

module.exports = router;
