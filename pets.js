var fs = require('fs');
var arr = process.argv;
if (arr[2] === undefined) {
  console.error('Usage: node pets.js [read | create | update | destroy]');
  process.exit(1);
}
else if (arr[2] === 'read') {
  fs.readFile('pets.json', 'utf8', function (err, data) {
    if (err) {
  }
  if (arr[3] === undefined) {
    console.log(JSON.parse(data));
  }
  else {
    var line = parseInt(arr[3]);
    console.log(JSON.parse(data)[line]);
  }
});
}
  else if (arr[2] === 'create') {
    if (arr[3] === undefined) {
      console.error('Usage: node pets.js create AGE KIND NAME');
      process.exit(1);
    }
    else if (arr[4] === undefined) {
      console.error('Usage: node pets.js create AGE KIND NAME');
      process.exit(1);
    }
    else if (arr[5] === undefined) {
      console.error('Usage: node pets.js create AGE KIND NAME');
      process.exit(1);
    }
    else {
    //   var num = parseInt(arr[3]);
    //   console.log(num);
      var pet = {age: parseInt(arr[3]), kind: arr[4], name: arr[5]};
      pets.push(pet);
      console.log(pets);
      process.exit(1);
    }
  }
