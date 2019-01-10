'use strict';

//Arrays
//Create an array of numbers, 1 through 10
//forloop()

function forLoop(array){
  for(let i = 0; i < array.length; i++){
    console.log(array[i]);
  }
}

forLoop(numArray);

//whileloop()

function whileLoop(array){
  let i = 0;
  while(i < array.length){
    console.log(array[i]);
    i++;
  };
};

whileLoop(numArray);

//Implement .map(), .filter(), .reduce() 

let mapper = (array, cb) => {
  let newArray = [];
  for(let i = 0; i < array.length; i++){
    newArray.push(cb(array[i], i));
  };
  return newArray;
};

let mappedNums = mapper(numArray, (value, index) => {
  return console.log(value);
});

//Filter:

let filterer = (array, cb) => {
  let newArray = [];
  for(let i = 0; i < array.length; i++){
    if(cb(array[i], i)){newArray.push(array[i])};
  };
  return newArray;
};

//Reduce:

const countNumberOfElements = (array) => {
  let arrayTotal = array.reduce((accumulator) => {
    accumulator++
    return accumulator;
  }, 0);
  return arrayTotal;
};

//Objects

const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {...people, ...stuff};

let newPeople = ['Odie', ...people, 'Garfield'];
const newStuff = {...stuff, cars: [...stuff.cars, 'Subaru']};
let newState = {...state};

console.log(newPeople);
console.log(newStuff);
console.log(state);
console.log(newState);