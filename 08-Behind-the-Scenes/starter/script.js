// 'use strict';
// let age
// function calcAge(birthYear) {
//    age = 2020 - birthYear;
//    return age;
// }

// calcAge(1992);
// console.log(age);
let x = 0;
let y = 1;
const sum = function () {
   for (let i = 0; i < arguments.length; i++) {
      x += arguments[i];
   }
   console.log(x);
}

const multiply = function () {
   for (let i = 0; i < arguments.length; i++) {
      y *= arguments[i];
   }
   console.log(y);
}

sum(20, 50, 40);
multiply(2, 2);

const age = 30;
const oldAge = age;

console.log(age);
console.log(oldAge);

