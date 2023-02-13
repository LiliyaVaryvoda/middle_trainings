// switch

const progLang = 'Python'
switch(progLang){
    case 'Javascript':
    console.log('Great choice')
    break
    case 'PHP':
    console.log('Still alive')
    break
    case 'Python':
    console.log('Yes')
    break
    default:
    console.log('choose somethig')
}

// ternary operator

const playFootball = true
const result = playFootball? 'I play football too!' : 'Do you like sport?'
console.log(result)

// if else

let time = 5

if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }

console.log(greeting)
