var fs = require('fs');
var pets = JSON.parse(fs.readFileSync('pets.json', 'utf8'));
var arr = process.argv;
var command = arr[2];

function read(index) {
  if (index === 500) {
    console.log(pets);
  }
  if (pets[index] !== undefined) {
    console.log(pets[index]);
  }
}

function create (age,kind,name) {
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
}


switch (command) {
  case 'read':
    var index = process.argv[3];
    if (index === undefined) {
      index = 500;
      read(index);
    }
    else if (index !== undefined) {
      read(index);
    }
    break;
  case 'create':
    var age = process.argv[3];
    var kind = process.argv[4];
    var name = process.argv[5];
    if (age === undefined || kind === undefined || name === undefined) {
      console.error('Usage: node pets.js create AGE KIND NAME');
      process.exit(1);
    }
    else {
      create(age,kind,name);
    }
    break;
  default:
    console.error('Usage: node pets.js [read | create | update | destroy]');
    process.exit(1);
     break;
}
module.exports = pets;
