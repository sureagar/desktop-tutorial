// A function is a reausable block of code assigned with a name

function add(a, b) {
    return a + b;
}
// In above code, add is the name of function
// a and b are parameters of the function
// return statement is used to return the value from the function
// Function by default returns undefined if there is no return statement
// return statement is the last statement of the function
// any code written after return statement will not be executed

let result = add(2, 3); // This will return 5
console.log(result); // This will print 5
console.log(add(10, 20)); // This will print 30

// function without return statement
function addNumbers(a, b) {
    console.log(a + b);
}
addNumbers(5, 10); // This will print 15 but return undefined

// create prime number function

function isPrime(n) {

    // let isPrime = true; // Falg variable
    for (let i = 2; i < n / 2; i++) {
        console.log("Checking if " + n + " is divisible by " + i);
        if (n % i == 0) {
            console.log(n + " is not a prime number");
            return false; // This will return false and exit the function
        }
    }
    return true; // This will return true if the number is prime
}