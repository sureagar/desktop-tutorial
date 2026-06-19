// working with objects

let person = {
    name: "sudhakar",
    age: 42,
    city: "Ongole",
    isMarried: true,
    hobbies: ["cricket", "football", "coding"],
    //methods
    greet: function(){
        console.log("Hello, my name is "+this.name);
    },
    sayAge(){
        console.log("I am "+this.age+" years old");
    },
    // arrow function does not have its own this keyword, it inherits this from the parent scope
    sayCity: () => {
        console.log("I live in "+this.city); // this will not work as expected
    }

}

console.log(person.name); // sudhakar
console.log(person["age"]); // 42
console.log(person.hobbies[0]); // cricket
person.greet(); // Hello, my name is sudhakar
person.sayAge(); // I am 42 years old
person.sayCity(); // I live in undefined