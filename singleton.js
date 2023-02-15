// функція сінглтон, яка має змінну instance, має метод createInstance and returns object which has property getInstance which 
// executes function getInstance with checking if instance exists or no

let Singleton = (function () {
    let instance;

    function createInstance() {
        let object = new Object('I am the instance');
        return object
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
        }
    }
})();


// function to check are the instance to be returned the same; instance1 and instance2 will return the same object
function run() {
    let instance1 = Singleton.getInstance(); // creating instance
    let instance2 = Singleton.getInstance();  // checking if exists and will return the same instance
    console.log('Same instance? ' + (instance1 === instance2));
}


run();




// second example


function Sun() {
    // Проверяем наличие экземпляра созданного ранее.      
    // Если св-во instance является объектом,      
    // это означает, что конструктор ранее запускался.      
    // Поэтому надо просто вернуть существующий экземпляр.     
    if (typeof Sun.instance === 'object') {
        return Sun.instance;
    }
    // Если Sun.instance === 'undefined',то определяем логику самого конструктора,      
    // т.е. инициализируем его свойствами и т.о. создаем новый экземпляр      
    this.color = 'yellow';
    this.isBig = true;
    // В св-во instance сохраняем ссылку на контекст,      
    // т.е. сохраняем созданный экземпляр для повторного использования      
    Sun.instance = this;
    // Неявный возврат экземпляра       
    return this;
}

var sunn1 = new Sun();
// Получаем ссылку на новый экземпляр 
// Sun.instance = null;  
var sunn2 = new Sun();
// Получаем ссылку на существующий экземпляр  
console.log(sunn1 === sunn2);
// true - ссылки одинаковые  
console.log(sunn1); //Sun { color: 'yellow', isBig: true }  
console.log(sunn2); //Sun { color: 'yellow', isBig: true }




