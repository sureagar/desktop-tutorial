// Object Constructor
function User(name, age, city){
    this.name = name;
    this.age = age;
    this.city = city;
    this.greet = function(){
        console.log("Hello, my name is "+this.name);
    }
}
// use new keyword to create an object from the constructor function
let user1 = new User("sudhakar", 42, "Ongole");
console.log(user1.name);
console.log(user1.age);
console.log(user1.city);
user1.greet();

let user2 = new User("anath", 43, "Hyderabad");
console.log(user2.name);
console.log(user2.age);
console.log(user2.city);
user2.greet();
