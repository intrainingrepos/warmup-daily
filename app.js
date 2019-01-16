'use strict';

//arrays
//create an array of numbers 1 through 10
//forLoop()

let numArr= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function forLoop(arr) {
  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

forLoop(numArr);

//whileLoop()

function whileLoop(arr) {
  let i = 0;
  while(i < arr.length) {
    console.log(arr[i]);
    i++;
  }
}
whileLoop(numArr);

//implement .map() .filter() .reduce()

let mapper = (arr, cb) => {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    newArr.push(cb(arr[i], i));
  }
  return newArr;
}

//filter

let filterer = (arr, cb) => {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(cb(arr[i], i)){newArr.push(arr[i])};
  }
  return newArr;
}

//reduce

const countNumOfElements = (arr) => {
  let arrTotal = arr.reduce((accumulator) => {
    accumulator++;
    return accumulator;
  }, 0);
  return arrTotal
}

//object

const people = ['Kookla', 'Fran', 'Ollie'];
const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota', 'Mazda']
}

let state = {...people, ...stuff};

let newPeople = ['Odie', ...people, 'Garfield'];
const newStuff = {...stuff, cars: [...stuff.cars, 'chevy']};

console.log(newPoeple);
console.log(newStuff);
console.log(state);
console.log(newState);