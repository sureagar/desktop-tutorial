// typescript datatypes

// Syntax for declaring a variable in TypeScript
// let variableName: datatype = value;

let x1:any = 10;
let x2:number = 20;

console.log(x1 + x2); // 30

x1="hello"; // error: Type 'string' is not assignable to type 'number'

let x3:string = "hello"; // String type variable can only hold string values
console.log(x3); // hello

let x4:boolean = true; // Boolean type variable can only hold true or false values
console.log(x4); // true

let x5:number[] = [1,2,3,4,5]; // Number Array type variable can hold multiple number values
console.log(x5); // [1,2,3,4,5]

let x6:string[] = ["a","b","c","d"]; // String Array type variable can hold multiple string values
console.log(x6); // ["a","b","c","d"]

let x7:any[] = [1,"a",true,2,"b",false]; // Any Array type variable can hold multiple values of any datatype
console.log(x7); // [1,"a",true,2,"b",false]

let x8:[number,string,boolean] = [1,"a",true]; // Tuple type variable can hold multiple values of different datatypes in a specific order
console.log(x8); // [1,"a",true]

//union type variable can hold values of multiple datatypes
let x9:number | string = 10; // can hold number or string values
console.log(x9); // 10
//union array type variable can hold multiple values of multiple datatypes
let x10:(number | string)[] = [1,"a",2,"b",3,"c"]; // can hold multiple number or string values
console.log(x10); // [1,"a",2,"b",3,"c"]

// enum type variable can hold a set of named constant values
// Enum contains fixed constants, it is used to define a set of named constants that can be used to represent a specific set of values. It is a way to give more meaningful names to a set of values, making the code more readable and maintainable. Enums can be used to represent a specific set of values, such as colors, directions, or status codes. Enums can be defined using the enum keyword followed by the name of the enum and a set of named constants enclosed in curly braces.
enum Color {
    Red,
    Green,
    Blue
}
let x11:Color = Color.Red;

let x12:Color = Color.Green;


//syntax for creating a function in TypeScript
// function functionName(parameter1:datatype, parameter2:datatype, ...): returnType {
//     // function body
// }
function addNumbers(a:number, b:number):number {
    return a + b;
}

// Default parameters in function
function addDef(a:number, b:number = 0):number {
    return a + b;
}

// Optional parameters in function
// ? is used to make a parameter optional in a function. 
// An optional parameter is a parameter that can be omitted when calling the function. If the optional parameter is not provided, it will be undefined. Optional parameters are defined using the ? symbol after the parameter name in the function declaration.
function addOpt(a:number, b?:number):number {
    if(b) {
        return a + b;
    } else {
        return a;
    }
}

// Rest parameters in function
// ... is used to define a rest parameter in a function. A rest parameter is a parameter that can accept an indefinite number of arguments as an array. Rest parameters are defined using the ... symbol followed by the parameter name in the function declaration.
function addRest(a:number, ...b:number[]):number {
    
    let sum = a;
    for(let i=0; i<b.length; i++) {
        sum += b[i];
    }
    return sum;
}

// Objects
// syntax for creating an object in TypeScript
// let objectName: {property1:datatype, property2:datatype, ...} = {property1:value1, property2:value2, ...};
let person = {
    name: "John",
    age: 30
}
console.log(person); // {name: "John", age: 30}

// You will not any change for objects in TypeScript as it is a superset of JavaScript and all JavaScript code is valid TypeScript code. However, you can add type annotations to the properties of the object to make it more type-safe and to catch errors at compile time. For example, you can define an interface for the person object and then use that interface to type the person variable.
interface Person { // Store implementation of an object in a variable
    name: string;
    age: number;
}

let person1: Person = {
    name: "John",
    age: 30
}
console.log(person1); // {name: "John", age: 30}