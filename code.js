// data types

// number

let age = 23

// strings

let firstName = 'Lilia'

// boolean

let fullAge = true

// undefined

let children




// variables

let myName = 'Lilia', java = false, myAge = 29


b = 2
var b

var a = '1', b = '2', c = '3'


var c = 1
var c = 2

console.log('d', d)  //undefined
var d = 'Lviv'


//console.log('letVar', letVar) - error
let letVar = 'Kyiv'


let spring
let someAge = 30
someAge = 31



// scope

function exampleFunction() {
    const x = "declared inside function"; // x can only be used in exampleFunction
    console.log("Inside function");
    console.log(x);
}

//console.log(x); // Causes error

const x = "declared outside function";

exampleFunction();

function exampleFunction() {
    console.log("Inside function");
    console.log(x);
}

console.log("Outside function");
console.log(x);



// value vs reference


let num1 = 70
let num2 = num1

console.log(num1) // 70
console.log(num2) // 70

num1 = 40

console.log(num1) // 40
console.log(num2) // 70




function multiplication(tmp) {
    tmp = tmp * 50;
    return tmp;
}
let num = 30;
let result = multiplication(num);
console.log(num); // 30
console.log(result); // 1500