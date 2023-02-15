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



class Car {
    constructor(carModel, carYear, maxSpeed){
        this.model = carModel
        this.year = carYear
        this.maxSpeed = maxSpeed
    }
    displayCarInfo(){
        console.log(`Name : ${this.model}
        Year: ${this.year}
        Max speed: ${this.maxSpeed}`)
    }
}

let volvo = new Car('CX60', 2015, 250)
volvo.displayCarInfo()