// basic class

class Car {
    constructor() {
        this.price = 10000
        this.model = 'Car'
    }

    getPrice(){
        return this.price
    }

    getDescription(){
        return this.model
    }
}


// child class 
class Tesla extends Car {
    constructor(){
        super()
        this.price = 25000
        this.modell = 'Tesla'
    }
}


// first decorator

class Autopilot {
    constructor(car){
        this.car = car
    }


    // на льоту модифікує значення ціни і опис
    getPrice(){
        return this.car.getPrice() + 5000
    }

    getDescription(){
        return `${this.car.getDescription()} with autopilot`
    }
}

// second decorator

class Parktronic {
    constructor(car){
        this.car = car
    }

    getPrice(){
        return this.car.getPrice() + 2000
    }

    getDescription(){
        return `${this.car.getDescription()} with parktronic`
    }
}


// за допомогою декоратора, ми можемо створити додаткові класи Autopilot and Parktronic and use it for any car (create new class Audi)

// we create new instance of class Tesla and wrap out instance using decorator adding additional functionality
let tesla = new Tesla()
tesla = new Autopilot(tesla)
tesla = new Parktronic(tesla)

console.log(tesla.getPrice(), tesla.getDescription())

let tesla2 = new Tesla()
tesla2 = new Autopilot(tesla2)
console.log(tesla2.getPrice(), tesla2.getDescription())

// is it polimorfism???