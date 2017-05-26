/* jshint esversion: 6 */
const express = require('express');
const fs = require('fs');
const router = express.Router();
const crud = require('./crud.js');
const file = './pets.json';

router.get('/pets',function(req,res,next){
  fs.readFile(file,'utf8',function(err,data){
    if(err) console.error(err);
    var pets = JSON.parse(data);
    res.status(200).send(pets);
  });
});

router.get('/pets/:id',function(req,res,next){
  fs.readFile(file,'utf8',function(err,data){
    if(err) console.error(err);
    var pets = JSON.parse(data);
    var index = req.params.id;
    if (index < 0 || index >= pets.length) {
      res.set('Content-type', 'text/plain');
      res.status(404).send('Not Found');
    }
    else {
      res.status('200').send(pets[index]);
    }
  });
});

router.post('/pets',function(req,res,next){
  var newPet = req.body;
  if (typeof newPet.age !== 'number' || typeof newPet.kind !== 'string' || typeof newPet.name !== 'string') {
    res.set('Content-type', 'text/plain');
    res.status(400).send('Bad Request');
  }
  else {
    fs.readFile(file,'utf8',function(err,data){
      if(err) console.error(err);
      var pets = JSON.parse(data);
      var results = crud.create(pets,newPet);
      fs.writeFile(file,JSON.stringify(results),function(err){
        if(err) console.error(err);
        res.status(200).send(results[results.length-1]);
      });
    });
  }
});

router.patch('/pets/:id', function (req,res,next) {
  fs.readFile(file,'utf8',function(err,data){
    if(err) console.error(err);
    var pets = JSON.parse(data);
    var index = req.params.id;
    if (index < 0 || index >= pets.length) {
      res.set('Content-type', 'text/plain');
      res.status(404).send('Not Found');
    }
    else {
      var petUpdate = req.body;
      var results = crud.update(pets,index,petUpdate);
      fs.writeFile(file,JSON.stringify(results),function(err){
        if(err) console.error(err);
        res.status(200).send(results[index]);
      });
    }
  });
});

router.delete('/pets/:id',function (req,res,next) {
  fs.readFile(file, 'utf8', function (err, data) {
    if (err) console.error(err);
    var pets = JSON.parse(data);
    var index = req.params.id;
    var removedPet = pets[index];
    var results = crud.destroy(pets,index);
    fs.writeFile(file,JSON.stringify(results), function (err) {
      res.status(200).send(removedPet);
    });
  });
});

module.exports = router;
