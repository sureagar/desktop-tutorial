// IIFE
function addNumbers(a,b) {
    console.log(a+b);
}
addNumbers(2,3);

// IIFE - Immediately Invoked Function Expression
// It is a function that is executed immediately after it is defined
// It is also known as self-invoking function

//syntax: (function definition)(parameters);
//IIFE is used as driver for that specfic js file
// It is used to execute the code immediately after it is defined

//function1
//function2
//function3
//function4

// Execute in a specific order
// Create another function and execute it immediately
// We import and call the functions
// IIFE will work as a driver

(function (a,b) {
    console.log(a+b);
})(20,30);

// Modules: we store code in differe files for reuse
// We create promises to handle asynchronous code
// To execute functions synchrnously we can use IIFE as a driver
// We dont use IIFE in creating tests.

// In java main method is the driver for the program
// In js we can use IIFE as a driver for the program 

