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


const arr3 = ["Cecilie", "Lone"];    //concat method() for merging aarays
const arr4 = ["Emil", "Tobias", "Linus"];
const arr5 = ["Robin", "Morgan"];
const myChildren = arr3.concat(arr4, arr5);
console.log(myChildren)


const fruits = ["Banana", "Orange", "Apple", "Mango"];   // slice method
fruits.splice(0, 1);
console.log(fruits)