type person={ // type used to define a structure of an object
    name: string;
    age: number;
}

let person1:person = {
    name: "John",
    age: 30
}

interface human { // Store implementation of an object in a variable
    name: string;
    age: number;
    wakeUp(): void;
    sleep(): void;
}

let person2: human = {
    name: "John",
    age: 30,
    wakeUp() {
        console.log("Wake up at 7 am");
    },
    sleep() {
        console.log("Sleep at 10 pm");
    }
}

class Employee implements human { // Store implementation of an object in a variable
    name: string;
    age: number;
    company: string = "ABC Company";
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    wakeUp() {
        console.log("Wake up at 7 am");
    }
    sleep() {
        console.log("Sleep at 10 pm");
    }
}

let emp1: Employee = new Employee("John", 30);

class CEO implements human { // Store implementation of an object in a variable
    name: string;
    age: number;
    company: string = "ABC Company";
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    wakeUp() {
        console.log("Wake up at 6 am");
    }
    sleep() {
        console.log("Sleep at 11 pm");
    }
}

let ceo1: CEO = new CEO("John", 30);

// Inheritance gets propertis and methods inherited from parent to child
// These are all implemented features
// In interface, we define a structure without implementation
// The classes that implement the interface must provide the implementation
//  for all the properties and methods defined in the interface. This allows us to create a contract that ensures that certain properties and methods are present in the classes that implement the interface, while still allowing for flexibility in how those properties and methods are implemented.


//generic function
function getValue<T>(a: T): T {
    return a;
}

getValue<string>("Hello"); // returns string type
getValue<number>(123); // returns number type
getValue<boolean>(true); // returns boolean type

// Write add function with generic type
function add<T>(a: T, b: T): T {
    if (typeof a === "number" && typeof b === "number") {
        return (a + b) as unknown as T;
    }
    if (typeof a === "string" && typeof b === "string") {
        return (a + b) as unknown as T;
    }
    throw new Error("Invalid types");
}

add<number>(1, 2); // returns 3
add<string>("Hello", " World"); // returns "Hello World"
// add<boolean>(true, false); // throws error