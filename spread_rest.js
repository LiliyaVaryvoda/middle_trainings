// spread operator

const myArray = [7,8,9,10]
const newMyArray = [4,5,6,...myArray]
console.log('newMyArray', newMyArray)



// rest parameters

const add = function(...numbers){
    console.log(numbers)
}

add(8,6,3,2,5,7,4,2)