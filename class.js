class Person {
    constructor(name, age) {
        this.name = name,
        this.age = age
    } greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age}`) 
    }
}

const Lilia = new Person('Lilia', 29)
Lilia.greet()

