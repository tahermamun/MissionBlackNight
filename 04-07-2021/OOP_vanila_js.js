

function Person2(n) {
    this.n = n
}

function Person(name, age) {
    this.name = name
    this.age = age
}
Person.prototype = {
    eat: function () {
        console.log(`${this.name} is Eating`)
    }
}
function Cricketer(name, age, type, country, n) {
    Person.call(this, name, age)
    Person2.call(this, n)
    this.type = type
    this.country = country
}


function Cricketer2(name, age, type, country, n) {
    Person.call(this, name, age)
    Person2.call(this, n)
    this.type = type
    this.country = country
}

 
Cricketer.prototype = Object.create(Person.prototype)

Cricketer.prototype.ami = function funcMe(){
    console.log('ami')
} 
Cricketer.prototype.constructor = Cricketer


var user = new Cricketer('Taher', 22, 'All Rounder', 'Bangladesh', 5)
var user2 = new Cricketer2('Taher', 22, 'All Rounder', 'Bangladesh', 50)

console.dir(user)
console.dir(user2)

