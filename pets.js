var fs = require('fs');
var arr = process.argv;
var command = arr[2];

function read(index) {
  fs.readFile('pets.json', 'utf8', function(err, data) {
      var content = JSON.parse(data);
      if (index === 500) {
        console.log(content);
      }
      if (content[index] !== undefined) {
        console.log(content[index]);
      }
  });
}
function create (age,kind,name) {
  var pet = {};
  pet.age = Number.parseInt(age);
  pet.kind = kind;
  no = name;
  var petsJSON = JSON.stringify(pet);
  console.log(pet);
  fs.writeFile('pets.json', petsJSON, 'utf8', function(err) {
    if (err) throw err;
  })
  read(2);
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
