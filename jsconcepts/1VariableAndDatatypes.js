"use strict" // strict mode is a way to opt in to a restricted variant of JavaScript. It eliminates some JavaScript silent errors by changing them to throw errors. It fixes mistakes that make it difficult for JavaScript engines to perform optimizations. It prohibits some syntax likely to be defined in future versions of ECMAScript.

let x = 10; // let used to declare a variable
var y = 20; // var is old way to declare a variable

//let is new and var old way to declare a variable. let is block scoped and var is function scoped. let is not hoisted and var is hoisted. let is not re-declarable and var is re-declarable. let is not accessible before declaration and var is accessible before declaration.
//var is not deprivated because of backward compatibility

// Declaration of variable is a standard
let z = x + y;
console.log(z);

let greet = "Hello World"; console.log(greet);

console.log(x);

// comment in js is single line comment and multi line comment
// single line comment is used to comment a single line of code
/* multi line comment
 is used to comment 
 multiple lines of code */

let X = 100; // variable name is case sensitive
console.log(X);

x = 50; // reassigning value to variable x
console.log(x);

const PI = 3.14; // const is used to declare a constant variable
console.log(PI);
// Using upper case is the standard for defining Constants

z = 300;
console.log(z);

// " " is used to define a string
let name = "John Doe";
console.log(name);

// ' ' is also used to define a string
let name2 = 'Jane Doe';
console.log(name2);

// ` ` is used to define a template literal
let name3 = `Hello ${name}`;
console.log(name3);

// for creating paragraphs and multi line strings we can use template literals
let paragraph = `This is a paragraph.
It is created using template literals.`;
console.log(paragraph);

let isElementPresent = true; // boolean data type
console.log(isElementPresent);

let num1=333333333; // number data type
console.log(num1);
let num2=99999999999999999999999999n; // bigint data type

console.log(num2); // JavaScript can handle large numbers but it may lose precision for very large numbers. For very large numbers, we can use BigInt data type.

console.log(Number(num2)/Number(num1)); // number

// String, Number, Boolean, BigInt, undefined, null, Symbol are the data types in JavaScript

let x1; // undefined data type
console.log(x1);
console.log("type of x1 before assigning:"+(typeof x1)); // undefined
x1=10;
console.log("type of x1 after assigning a number:"+typeof x1); // number

//type of x1: undefined

// null type

// Varaibles
// Assign a single value
// We can also assign multiple values
// We can assign objects

let data = null; // null is a special value that represents the absence of any value. It is an assignment value. It can be assigned to a variable as a representation of no value. It is also a primitive value. It is falsy value. It is not the same as undefined. It is not the same as 0 or empty string.
console.log(data);
console.log(typeof data); // object

// Value Assignment: number, string, boolean, object, array
// undefined, null

let a=10;

// Array
let numbers = [4,2,5,6];
console.log(numbers);
console.log(typeof numbers); // object
console.log(numbers[0]); // 4
console.log(numbers.length); // 4

let userData = ["sudhakar",42,"Ongole"];
console.log(userData);
console.log(userData[0]);

// Array index starts from 0 and ends at length-1

let userData2 = {"username":"sudhakar","age":42,"city":"Ongole"};
console.log(userData2.username);
console.log(userData2["username"]);

// [] : Array
// {} : Object


// Create an object with multiple datatypes

let toolData={
    "toolName":"Playwright",
    "version": "1.20.0",
    "isOpenSource": true,
    "languagesSupported": ["JavaScript","Python","C#"],
    "company": {
        "name": "Microsoft",
        "founded": 1975
    }
}

console.log(toolData.company.name); // Microsoft

console.log(toolData.languagesSupported[0]); // JavaScript
//JSON: JavaScript Object Notation, it is a lightweight data interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate. It is based on a subset of the JavaScript Programming Language. It is a text format that is completely language independent but uses conventions that are familiar to programmers of the C-family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others. These properties make JSON an ideal data interchange language.

// accessing array values: we use index
// accessing object values: we use ObjectVariable.KeyName or ObjectVariable["KeyName"]


let i=10;
console.log(i);
i=i+1; // i++ or i+=1
console.log(i)

let numArray = [1,2,3,4,5];
console.log(numArray);
numArray[0] = 10;
console.log(numArray);

let emptyArr=[];
emptyArr[0]=100;
console.log(emptyArr);