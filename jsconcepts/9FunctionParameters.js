// Write a function to pass an array and addition all values
function sumArray(...numArr) { // ... is rest parameter that allows us to pass variable number of arguments as an array
    // Create a variable to store addition value for each iteration
    let sum = 0;
    for (let v of numArr) {
        // console.log(v)
        sum = sum + v;// Update the sum with new value as loop iterates
    }
    console.log(sum); // print final value after for loop
}

let arr1 = [10, 20, 30, 40, 50];
sumArray(1, 3, 1, 7, 8, 9, 10);
// A Rest Parameter accepts any number of values
// It should be the last parameter in the function definition
sumArray(...arr1); // Spread operator is used to pass array elements as individual arguments to the function

// // Write a function to find factors and return all factors

// function getFactors(n){
//     let factors = []; // Create an array to store factors
//     // 10 : 1,2,5,10
//     for(let i=1; i<=n; i++){
//         if(n%i == 0){
//             // console.log(i);
//             // factors.push(i); // Add factor to the array
//             factors[factors.length] = i; // Add factor to the array
//         }
//     }
//     return factors; // return all factors
// }

// console.log(getFactors(10)); // This will print [1,2,5,10]

// Rest Parameter, Spread Operator, Default Parameters
// Rest Parameter: It allows us to pass any number values while calling a function
// Spread Operator: When there is rest parameter defined in the function, 
//  we can use spread operator to pass array elements as individual arguments to the function

let arr2 = [1, 2, 3];
console.log(arr2); // This will print [1,2,3]
console.log(...arr2); // This will print 1 2 3

let [a, b, c] = [...arr2]; // Destructuring assignment to assign array elements to variables
console.log(a);
console.log(b);
console.log(c);

// Default Parameters: We can set the default value for function parameters
// If we pass the values, it will be executed with passed values
// if we do not pass the values, it will be executed with default values

function addNumbers(a=2, b=3,c) { // Default values for a and b are 0
    return a + b+c;
}
console.log(addNumbers(5, 10,20));
console.log(addNumbers(undefined,undefined,10));
console.log(addNumbers(7,undefined,10 )); 
console.log(addNumbers(undefined, 8,5));

//Arrow Functions: It is a shorter syntax for writing functions in JavaScript
setTimeout(function(){
    console.log("This is a regular function");
}, 1000);

// Setttimeout is a built in function of javascript
// Its takes function as first parameter and time in milliseconds as second parameter

// Anonymous function is a function without a name

let demo = function (){
    console.log("This is a anonymous function");
}

// Here demo is a variable that holds the reference to the anonymous function

demo();


function calculator(a, b, operation) {
    operation(a, b); // This will call the function passed as operation with a and b as arguments
}

calculator(10, 20, function (x, y) {
    console.log("Addition: " + (x + y));
});

calculator(10, 20,  (x, y)=> x+y); // This will print 30

let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(v){
    console.log(v);
});
