// simple realization of module pattern with open полями

function personDetails() {
    let name = 'John'
    let age = 30
    let job = 'test engineer'

    return{
        name:name,
        age:age,
        job:job
    }
}


// значення які повертаються під час виклику функції зберігаються в object literal in variable newEmployee
// ми можемо отримати доступ тут до всіх властивостей  бо було повернуто первий обєкт
let newEmployee = personDetails()
let username = newEmployee.name
let userAge = newEmployee.age
let userJob = newEmployee.job



// розширений код

// salary - not avaiable outside the function/module and not avaliable for object person - its like private variable
function personDetails() {
    let name = 'John'
    let age = 30
    let job = 'test engineer'
    let salary = 500

    // this function uses provate variable salary
    let calculateBonus = (amount) => salary = salary + amount

    return{
        name:name,
        age:age,
        job:job,
        bonus: calculateBonus
    }
}
let newEmployee = personDetails()
let username = newEmployee.name
let userAge = newEmployee.age
let userJob = newEmployee.job

let person = personDetails()
let userName = person.salary   // undefined
// person does not have direct access to variable bonus, but function personDetails components use its value
// salary variable is private for function personDetails
// after function execution, variable salary still is saved in function область
let userSalary = person.bonus(200)


// is it incapsulation???