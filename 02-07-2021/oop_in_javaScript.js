
// let studentMethod = {
//     eat() {
//         console.log(`${this.name} is Eating`)
//     },
//     play() {
//         console.log(`${this.name} is Eating`)
//     }
// }
// function student(name, age) {
//     return {
//         name: name,
//         age: age,
//         play: studentMethod.play,
//         eat: studentMethod.eat
//     }
// }
// let result = student('Taher', 22)

// console.dir(result)









// Student.prototype = {
//     eat() {
//         console.log(`${this.name} is Eating`)
//     },
//     play() {
//         console.log(`${this.name} is Eating`)
//     }
// }
// function Student(name, age) {
//     this.name = name
//     this.age = age
// }

// const result = new Student('Taher Mamun', 22)
// result.play()

// console.log(result)
// console.dir(Student)









//Inheritance_____________________


// class Person { //parent class
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     play() {
//         console.log(`${this.name} is playing`)
//     }
// }
// class Cricketer extends Person { //sub class
//     constructor(name, age,type, country) {
//         super(name, age)
//         this.type = type
//         this.country = country
//     }
//     play() {
//         console.log(`${this.name} is a Cricketer, He is a ${this.type} Player.`)
//     }
// }

// var cricketer = new Cricketer('Taher Mamun', 22,'All Rounder', 'Bangladesh')
// cricketer.play()


// var person = new Person('Taher Mamun', 22)
// person.play()
// console.dir(person)




// Polymorphism______________________


// class Person { //parent class
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     play() {
//         console.log(`${this.name} is playing`)
//     }
// }
// class Cricketer extends Person { //sub class
//     constructor(name, age,type, country) {
//         super(name, age)
//         this.type = type
//         this.country = country
//     }
//     play() {
//         console.log(`${this.name} is a Cricketer, He is a ${this.type} Player.`)
//     }
// }

// var cricketer = new Cricketer('Taher Mamun', 22,'All Rounder', 'Bangladesh')
// cricketer.play()





// getter and setter_______________________

// class Person{
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
//     eat(){
//         console.log(`${this.name} is Eating`)
//     }
//     get getName(){ //Getter
//         return this.name
//     }

//     set setName(name){ //setter
//         this.name = name
//     }
// }
// let mamun = new Person('Taher Mamun', 222) 
// console.log(mamun.getName) //getter

// mamun.setName = 'Suhan'//setter

// console.log(mamun.getName) //getter




// Abstraction_____________________


// function Check() {
//     var meeting = 'This meeting is Hidden'

//     this.details = 'i love bangladesh'

//     Object.defineProperty(this, 'meeting',{
//         get: function() {
//             return meeting
//         }
//     })
// }

// const user = new Check()

// console.dir(user)
// console.log(user.meeting)