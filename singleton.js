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