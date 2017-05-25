const pets = require('./pets.json');
const fs = require('fs');
var ops = {
  create: function (age,kind,name) {
    var pet = {};
    pet.age = Number(age);
    pet.kind = kind;
    pet.name = name;
    pets.push(pet);
    fs.writeFile('pets.json', JSON.stringify(pets), function (err){
      if (err){
        console.error(err);
      }
    });
  },
  update: function (age,kind,name,index) {
    var pet = pets[index];
    console.log('pet before', pet);
    if (age) {
      pet.age = Number(age);
    }
    if (kind) {
      pet.kind = kind;
    }
    if (name) {
      pet.name = name;
    }
    pets[index] = pet;
    // fs.writeFile('pets.json', JSON.stringify(pets), function (err){
    //   if (err){
    //     console.error(err);
    //   }
    // });
    console.log('pet after', pet);
    // return pet;
  }
};

module.exports = ops;
