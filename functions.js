// function destructuring

const student = {
    firstName: 'Lilia',
    lastName: 'Varyvoda',
    age: 29
}
delete student.age
student.subject = 'JS'


function descFunc({ firstName, lastName, subject }) {
    console.log(firstName, lastName, subject)
}
descFunc(student)




//function declaration, can be hoisted
logger();
function logger() {
    console.log('Logger function');
}

// running, invoking or calling the function
logger()

// function expression, cannot be hoisted
//hi();
const hi = function () {
    console.log('hi')
}


function fruitProcess(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`
    return juice
}


const juiceAll = fruitProcess(5, 2);
console.log(juiceAll)
console.log(fruitProcess(5, 1))


// function with default parameters
function defaultParams(name = 'Lilia') {
    console.log(name)
}
defaultParams()


// Callback Function
function greet(name, myFunction) {
    console.log('Hello world');
    myFunction(name);
}

function sayName(name) {
    console.log(`Hello ${name}!`);
}

greet('Lilia', sayName)


// arrow function

const numberSum = (a) => a + 100;
console.log(numberSum(5))

