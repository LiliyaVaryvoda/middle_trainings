// arrays destructuring 


const restourant = {
    restorantName: 'Classico Italian',
    location: 'Firenze,Italy',
    starterMenu: ['Salad', 'Bread'],
    mainMenu: ['Pizza', 'Pasta', 'Rizotto']
}

const [first, second] = restourant.starterMenu
console.log(first, second)

const [one, ,three] = restourant.mainMenu
console.log(one, three)

const arrayDestructuring = [1,23,4,5]

const [x,y,z,w] = arrayDestructuring
console.log(x,y,z,w)