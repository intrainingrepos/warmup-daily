'use strict';

//arrays
//create an array of numbers 1 through 10
//forloop()

fucntion forLoop(arr) {
  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
forLoop(numArr);

//whileLopp()

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
  for(let i = 0; i < arr.length, i++) {
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
  let arrTotal = Arr.reduce((accumulator) => {
    accumulator++
    return accumulator;
  }, 0);
  return arrTotal;
}

//object
const people = ['Kookla', 'Fran', 'Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota', 'Mazda']
}

let state = {...poeple, ...stuff};

let newPeople = ['Odie', ...poeple, 'Garfield'];
const newStuff = {...stuff, cars: [...stuff.cars, 'subaru']};

console.log(newPeople);
console.log(newStuff);
console.log(state);
console.log(newState);