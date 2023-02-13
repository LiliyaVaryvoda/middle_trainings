const obj1 = { a: 1, b: 2 }
const obj2 = { a: 1, b: 2 }

function compareKeys(values){
    const objKeys1 = Object.keys(obj1)
    const objKeys2 = Object.keys(obj2)
    return objKeys1.every((key, index) => key == objKeys2[index])
}

function compareWithJson(){
    const a = JSON.stringify(obj1)
    const b = JSON.stringify(obj2)
    return a == b
}

console.log(compareKeys())
console.log(compareWithJson())
