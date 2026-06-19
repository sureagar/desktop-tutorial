"use strict";
// Find a number is odd or not
let num = 5;
// Devide the number by 2, the reminder should not be 0
// +, - ,*, /
// % used of for mod
console.log(num % 2)

// = : assigning value
// == : verify equal
// === : strict equal 

if (num % 2 == 1) {
    console.log("Number is odd");
} else {
    console.log("Number is even");
}

// { } defining a block

console.log(2 == 2); // true
console.log(2 == 3); // false
console.log(2 == "2");// == only only compares value, not type
console.log(2 === "2");// === compares value and type

console.log(typeof "2"); // true
let a = 10;
console.log(typeof a); // number

console.log("hello" == "Hello"); // false because of case sensitivity

//find a big number between 2 numbers
let num1 = 10;
let num2 = 10;
if (num1 > num2) {
    console.log("num1 is big");
} else if (num1 < num2) {
    console.log('num2 is big')
} else {
    console.log("both are equal")
}