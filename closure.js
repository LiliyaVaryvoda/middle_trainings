function makeFunct() {
    let name = 'Mozilla'
    function displayName(){
        console.log(name)
    }
    return displayName
}

let myFunct2 = makeFunct()
myFunct2()
