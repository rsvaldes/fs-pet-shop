/* jshint esversion: 6 */
const fs = require('fs');

var crud = {
  create: function (arr,obj) {
    // var fileDataArray = read(file); //Get pets from pets.json
    var newValue = {}; //newPet object
    newValue.age = Number(obj.age); //newPet age
    newValue.kind = obj.kind; //newPet kind
    newValue.name = obj.name; //newPet name
    arr.push(newValue); //Add newPet to pets
    // write(file,arr); //write pets to pets.json
    return arr; //return newPet for response
  },

  update: function (arr,index,obj) {

    for(var i in obj){
      Object.values(arr)[index][i] = obj[i];
    }
    return arr;
  },

  destroy: function (arr,index) {
    arr.splice(index,1);
    return arr;
  }
};

module.exports = crud;
