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

    displayCarInfo(){
        console.log(`Its a car model : ${this.model}
        made in year ${this.year}
        car max speed: ${this.maxSpeed}`)
    }
}


class Truck extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed).
            this.type = 'track'
    }
    displayCarInfo(){
        super.displayCarInfo()
        console.log('Please not, additional license is needed')
    }
}