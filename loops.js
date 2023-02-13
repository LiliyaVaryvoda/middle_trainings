for (let index = 0; index < 10; index++) {
    console.log(index)
}


const obj = {
    prop1: 'first',
    prop2: 'second'
}
for (let key in obj) {
    console.log(key)
}



const months = [1, 2, 3, 4, 5, 6]
for (let month of months) {
    console.log(month)
}


let count = 0
while (count < 5) {
    count++
    console.log(count)
}



const condit = false
do {
    console.log('executed')
} while (condit)
