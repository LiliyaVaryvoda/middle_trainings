// 1)	It is by reference, both will be mutated if there are changes
const obj ={a:1, b:2}
const copy = obj


//2) It will be shallow copy
const copy2 = {a:1, b:2}


//3) Deep copy
const copy3 = JSON.parse(JSON.stringify(obj))

