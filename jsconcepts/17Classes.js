// Class in Javascript

// A class is a blueprint for creating objects. 
// It encapsulates data and functions that operate on that data.
// Classes in JavaScript were introduced in ECMAScript 2015 (ES6) and provide a more elegant syntax for creating objects and handling inheritance.

// Class contains variables, methods, and constructors. 

// Constructor: Called automatically when an object is created from the class.
//  It initializes the object's properties.

// You can created methods without using the function keyword.

// public variables: can be accessed from outside the class.
// private variables: can only be accessed from within the class. 
// In JavaScript, private variables are declared using the # symbol before the variable name.

// class attributes, 

class User {

    //public variables
    pbv1 = "public variable 1";
    pbv2 = "public variable 2";

    // private variables
    #pv1 = "private variable 1"; // use # to declare private variables
    #pv2 = "private variable 2";

    constructor(name, age, city){
        this.name = name;
        this.age = age;
        this.city = city;
    }

    greet(){
        console.log("Hello, my name is "+this.name);
    }
    
}

let user1 = new User("sudhakar", 42, "Ongole");
console.log(user1.name);
console.log(user1.age);
console.log(user1.city);
user1.greet();

console.log(user1.pbv1);
console.log(user1.pbv2);

user1.pbv1= "updated using user1 object";

console.log(user1.pbv1);
// console.log(user1.#pv1); // SyntaxError: Private field '#pv1' must be declared in an enclosing class

let user2 = new User("anath", 43, "Hyderabad");
console.log(user2.pbv1);
console.log(user2.pbv2);

