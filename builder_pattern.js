class Calculator {
    constructor(props){
      this.result = 0 ;
    }
    
    add(number){
      this.result = this.result + number ;
      return this ;
    }
    
    subtract(number){
      this.result = this.result - number ;
      return this;
    }
    
    divide(number){
      this.result = this.result / number ;
      return this;
    }
    
    multiply(number){
      this.result = this.result * number ;
      return this;
    }
    
    compute(){
      return this.result;
    }
  }

let calculator = new Calculator()
let result = calculator.add(5).subtract(1).divide(2).compute()