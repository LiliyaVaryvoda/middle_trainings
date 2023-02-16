let Task = function(name, description, finished, dueDate) {

    this.name = name;
    this.description = description;
    this.finished = finished;
    this.dueDate = dueDate;
}

let TaskBuilder = function () {

    let name;
    let description;
    let isFinished = false;
    let dueDate;

    return {
        // кожна з цих функцій повертає this, цей обєкт
        setName: function (name) {
            this.name = name;
            return this;
        },
        setDescription: function (description) {
            this.description = description;
            return this;
        },
        setFinished: function (finished) {
            this.finished = finished;
            return this;
        },
        setDueDate: function (dueDate) {
            this.dueDate = dueDate;
            return this;
        },
        build: function () {
            return new Task(name, description, isFinished, dueDate);
        }
    };
};

let task = new TaskBuilder().setName('Task A').setDescription('finish book')
    .setDueDate(new Date(2019, 5, 12));
console.log(task);




// second example


let User = function (firstName, lastName, email) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.address = address
}

let UserBuilder = function () {

    let firstName;
    let lastName;
    let email;
    let address

    return {
        setFirstName: function (firstName) {
            this.firstName = firstName;
            return this;
        },
        setLastName: function (lastName) {
            this.lastName = lastName;
            return this;
        },
        setEmail: function (email) {
            this.email = email;
            return this;
        },
        setAddress: function (address) {
            this.address = address
            return this
        }, 
        info: function () {
            return `${this.firstName} ${this.lastName}, ${this.email}`;
        },
        build: function () {
            return new User(firstName, lastName, email);
        }
    };
};

var user = new UserBuilder().setFirstName('Ramesh').setLastName('Fadatare')
    .setEmail('ramesh@gmail.com');
console.log(user.info());