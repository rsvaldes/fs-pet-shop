const express = require('express');
const router = express.Router();
const pets = require('./pets.json');
const petOps = require('./petOps.js');
const fs = require('fs');

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
    // console.log(pets);
    // petOps.update(req.body);
    // res.status(200).send(pets[req.params.id]);
    fs.readFile('./pets.json', 'utf8', function (err,data) {
      if (err) {
        throw err;
      }
      var id = Number.parseInt(req.params.id);
      var petsarray = JSON.parse(data);
      if (id < 0 || id >= petsarray.length) {
        return res.status(404);
      }
      var pet = req.body;
      if (!pet) {
        return res.sendStatus(400);
      }
      petsarray[id] = pet;
      var newPetsJSON = JSON.stringify(petsarray);
      fs.writeFile('./pets.json', newPetsJSON, function (err) {
        if (err) throw err;
        res.send(petsarray[id]);
        console.log(req.body);
      });
    });
});

module.exports = router;
