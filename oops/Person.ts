class Person {
    name: string;
    #age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.#age = age;
    }
    display() {
        console.log("Name: " + this.name + " Age: " + this.#age);
    }

    getAge(){
        return this.#age;
    }

    //over loading example
    Run(speed:number){
        console.log("from parent:"+this.name+" is running at speed "+speed);
    }
}

export default Person;