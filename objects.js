let myObj = {}
let myPerson = {
    name: 'Lilia',
    age: 28,
    sayHi: function () {
        return `${this.name} has ${this.age} years old`
    },
    ['aaa aaa']: 123
}
myPerson.name
myPerson['aaa aaa']

console.log(myPerson)
console.log(myPerson.sayHi())



// destructuring objects

const {restorantName, mainMenu} = restourant
console.log(restorantName, mainMenu)
const{restorantName:newName} = restourant
console.log(newName)
