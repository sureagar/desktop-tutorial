import Person from "./Person";

class Employee extends Person {

    constructor(name: string, age: number) {
        super(name, age);
    }

    getAge() { // method overriding
        return 100;
    }

    // Over loading example
    Run(speed: number, distance?: number) {

        if (distance == undefined) {
            super.Run(speed); // calling parent class method
        } else {
            console.log("fromchild:" + this.name + " is running at speed " + speed + " for distance " + distance);

        }

    }
}

let emp = new Employee("John", 30);

emp.display();
console.log(emp.getAge());

emp.Run(100);
emp.Run(100, 200);