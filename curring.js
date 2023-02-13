function go(){
    return function (a) {
        return function (b) {
            return function(c) {
                return a + b + c
            }
        }
    }
}
console.log(go()(1)(2)(3))
