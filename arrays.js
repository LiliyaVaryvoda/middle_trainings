const arr1 = [1,4,6,8,4,4,5,6,4]     // .filter() method
const arr2 = arr1.filter((item)=>item%2)
console.log(arr2)


const array1 = [1, 4, 9, 16];    // map() method
const map1 = array1.map(x => x * 2);
console.log(map1);

const array2 = [1, 4, 9, 16]
const map2 = array2.map(x=> x+2)
console.log(map2)


const arrayFor = ['a', 'b', 'c'];   // forEach() method
arrayFor.forEach(element => console.log(element));