'use strict';

//Arrays
//Create an array of numbers, 1 through 10
//Write a function, called forLoop that takes an array as a parameter, runs the array through a for(...) loop and does a console.log() of each element.
let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function forLoop(array){
  for(let i = 0; i < array.length; i++){
    console.log(array[i]);
  }
}

forLoop(numArray);

//Write a function, called whileLoop that takes an array as a parameter, runs the array through a while(...) loop and does a console.log() of each element.

function whileLoop(array){
  let i = 0;
  while(i < array.length){
    console.log(array[i]);
    i++;
  };
};

whileLoop(numArray);

//Implement .map(), .filter(), .reduce() as regular javascript functions that take in an array as a parameter, but do the same things as the real functions.

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

//Filter: takes in an array as a parameter, this will also do the same thing as a real function

let filterer = (array, cb) => {
  let newArray = [];
  for(let i = 0; i < array.length; i++){
    if(cb(array[i], i)){newArray.push(array[i])};
  };
  return newArray;
};

//Reduce:

//Write a function named countNumberOfElements that, given an array as input, uses reduce to count the number of elements in the array.

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