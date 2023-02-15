class Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        this.model = carModel
        this.year = carYear
        this.maxSpeed = maxSpeed
    }

    displayCarInfo() {
        console.log(`Name : ${this.model}
        Year: ${this.year}
        Max speed: ${this.maxSpeed}
        Type: ${this.type}`)
    }
}

class Car extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed)
        this.type = 'car'
    }

    transportPeople() {
        console.log('I am starting transpotring passengers')
    }
}

class Truck extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed).
            this.type = 'track'
    }
    transportContainer() {
        console.log('I am transporting heave containers')
    }
}