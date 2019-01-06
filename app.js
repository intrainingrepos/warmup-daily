'use strict';

//Map: takes in an array as a parameter, this will also do the same thing as a real function

let mapper = (arr, cb) => {
  let newArr = [];
  for(let i = 0; i < arr.length; i ++){
    newArr.push(cb(arr[i], i));
  }
  return newArr;
};

//Filter: takes in an array as a parameter, this will also do the same thing as a real function

let filterer = (arr, cb) => {
  let newArr = [];
  for(let i = 0; i < arr.length; i ++){
    if (cb(arr[i], i)){newArr.push(arr[i])};
  }
  return newArr;
};


//Reduce:

//Write a function named countNumberOfElements that, given an array as input, uses reduce to count the number of elements in the array.

const countNumberOfElements = (arr) => {
  let arrTotal = arr.reduce((accumulator) => {
    accumulator++
    return accumulator;
  }, 0);
  return arrTotal;
};

// Objects:

const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {...family, ...stuff};

let newPeople = [...people, 'Odie', 'Garfield'];
const newStuff = {...stuff, cars: 'Chevy'};
let newState = {...family, ...stuff};

console.log(people);
console.log(stuff);
console.log(state);