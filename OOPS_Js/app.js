// Factory Functons

// function personMaker(name, age){
//     const person = {
//         name: name,
//         age: age,
//         talk(){
//             console.log(`Hi, my name is ${this.name}`);
//         },
//     }
//     return person;
// }

// let p1 = personMaker("Shubham Bisht", 19);

// Constructors - deosn't return anything & start with CAPS letter
// function Person(name, age){
//     this.name = name;
//     this.age = age;
//     console.log(this);
// }

// Person.prototype.talk = function(){
//     console.log(`Hi, my name is ${this.name}`);
// }

// let p1 = new Person("Shubham", 19);

//Class and constructor method

// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     talk(){
//         console.log(`Hi, my name is ${this.name}`);
//     }
// }

// let p1 = new Person("Shubham", 19);
// let p3 = new Person("Priyanshu", 23);



//Inheritance
class Person {
    constructor(name, age) {
        console.log("Person's class constructor");
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi, my name is ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, age, marks) {
        console.log("Student's class constructor");
        super(name, age); //parent class constructor being called
        this.marks = marks;
    }
}

class Teacher extends Person {
    constructor(name, age, subject) {
        console.log("Teacher's class constructor");
        super(name, age); //parent class constructor being called
        this.subject = subject;
    }
}