const flyable = {
    fly() {
        console.log('fly');
    }
}

const swimable = {
    swim() {
        console.log('swim');
    }
}


const duck = Object.assign({}, flyable, swimable)
duck.fly()
duck.swim()
