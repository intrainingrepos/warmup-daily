'use strict';

//Arrays

//Create an array of numbers, 1 through 10
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Write a function, called forLoop that takes an array as a parameter, runs the array through a for(...) loop and does a console.log() of each element.

function forLoop(arr){
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
};

forLoop(array);

//Write a function, called whileLoop that takes an array as a parameter, runs the array through a while(...) loop and does a console.log() of each element.

function whileLoop(arr){
  let i = 0;
  while(i < arr.length){
    console.log(arr[i]);
    i++;
  }
}

whileLoop(array);

//Implement .map(), .filter(), .reduce() as regular javascript functions that take in an array as a parameter, but do the same things as the real functions.

let family = ['Jared', 'Teagan', 'Keely', 'Boone'];

let mapper = (family, cb) => {
  let newArr = [];
  for(let i = 0; i < family.length; i++){
    newArr.push(cb(family[i], i));
  }
  return newArr;
};

let mapped = mapper(family, (value, idx) => {
  return value.toUpperCase();
});