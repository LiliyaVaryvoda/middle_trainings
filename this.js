const obj1 = {
    name: 'Lilia',
    surname: 'Varyvoda',
    logFullName: function () { console.log(this.name, this.surname) },
    logPoemandNation: function (poem, nation) { console.log(poem, nation) }
}
const obj2 = {
    name: 'Taras',
    surname: 'Schevchenko'
}

obj1.logFullName()
obj1.logFullName.call(obj2)


obj1.logPoemandNation.call(obj2, 'Zapovit', 'Ukraine')

obj1.logPoemandNation.apply(obj2, ['Zapovit', 'Ukraine'])


const bindedFunction = obj1.logFullName.bind(obj2)
bindedFunction()
