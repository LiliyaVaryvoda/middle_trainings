// data types

// number

let age = 23

let myNumber = 123;
console.log(myNumber.toString())   // toString() method
console.log((123).toString())
console.log((100 + 23).toString())
console.log((100 + 23).toString())


let expNumber = 9.656;   // toExponential() method
console.log(expNumber.toExponential(2))
console.log(expNumber.toExponential(4))
console.log(expNumber.toExponential(6))

// strings

let firstName = 'Lilia'

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";   // method .length
let lengthStr = text.length;
console.log('String length', lengthStr)

console.log("Blue Whale".toLowerCase().includes("blue"))  //method .includes()


let cityText = "Lviv : Please visit Lviv! (LVIV)";  // method .replace()
let newCityText = cityText.replace("Lviv", "Kyiv");
console.log(newCityText)

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