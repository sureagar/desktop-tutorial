// Arrow Function is a short form for anonymous function

let demo = () => {
    console("this is anonymous function")
};

// ()=>{}

// Create add arrow function

let add = (a, b) => {
    return a + b;
}

console.log(add(2, 3));

// Arrow function with single parameter
// when function is having simple parameter, the paranthesis becomes optional

let printSomething = msg => {
    console.log(msg);
}

printSomething("hello");

// When there is only one statement in the block and if that is return statement
// then using {}, return will be optional
// The statement automatically returns

// Create multiply arrow function

let multiply = (a, b) => a * b;
let devide = (a, b) => a / b;

console.log(multiply(2, 3));

// (parameters)=>{statements}
// paranthesis is optional when there is only one parameter
// {} required when there are more than one statement
// {} is optional when there is only one statement
// using return key word is not when there is one like that too a return statement


let a1 = () => {
    console.log("hello")
}

let arr = [10, 20, 30, 40, 50];
arr.forEach(v =>console.log(v));
arr.forEach(function v(){
    console.log(v)
});

