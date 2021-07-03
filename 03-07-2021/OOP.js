
// 3 ways to create new Object
// var obj = {}
// var obj1 = new Object()
// var obj2 = Object.create()



// Object.prototype.BdLove1 = function (name) {

//     console.log(`My Name is ${name}. I love Call Method`)
// }

// BdLove1('mamun')


// Object.prototype.BdLove2 = function (name) {
//     let p = `My Name is ${name}. I love Bangladesh`
//     return p
// }
// var r = BdLove2('mamun')
// console.log(r)


// console.dir(Object)







// var user = {
//     name:'Taher Mamun', 
//     age: 22
// }

// function people() {
//     let obj = Object.create(user)
//     obj.address = 'Sylhet'
//     return obj
// }
// var result = people()
// console.dir(result)









function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype = {
    eat: function () {
        console.log(`${this.name} is Eating`)
    }
}


function Cricketer(name, age, type, country) {
    Person.call(this, name, age)
    // this.name = name
    // this.age = age
    this.type = type
    this.country = country
    this.learn = function (name) {}
}

// Cricketer.prototype = {
//     play: function () {
//         console.log(`${this.name} is Playing`)
//     }
// }

Cricketer.prototype = Object.create(Person.prototype)

Cricketer.prototype.constructor = Cricketer

let cricketer = new Cricketer('Taher', 222, 'All Rounder', 'Bangladesh')
cricketer.eat()
console.log(cricketer.name)
// cricketer.play()
console.dir(cricketer)

// let user = new Person('Taher', 222)
// user.eat()
