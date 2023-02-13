function Person(name, age) {
    this.name = name,
        this.age = age,
        this.greet = function () { console.log(`Hello, my name is ${name} and I am ${age} years old`) }
}
const lilia = new Person('Lilia', 29)
lilia.greet()
lilia.favColor = 'pink'

console.log(lilia.favColor)


const student = Object.create(lilia)
student.subject = 'JS'

console.log(student.subject)
