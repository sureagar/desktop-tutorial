//working with arrays
let arr = [10, 20, 30, 40, 50];
console.log(arr);
// finding the length of the array
console.log(arr.length);
// finding value exist in the array
console.log(arr.includes(20));
console.log(arr.includes(60));
// finding the index of a value in the array
console.log(arr.indexOf(30));
console.log(arr.indexOf(60));

// Split a string into an array
let str = "Hello World";
let arr2 = str.split("o");
console.log(arr2);
console.log(arr2.length-1);
// Join an array into a string
let str2 = arr2.join("o");
console.log(str2);

// Add an element to the end of the array
arr.push(60);
console.log(arr);

// Add an element to the beginning of the array
arr.unshift(0);
console.log(arr);