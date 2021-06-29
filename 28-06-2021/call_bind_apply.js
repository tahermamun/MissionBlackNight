// JavaScript Call Method

const student = {
    name:'Taher Mamun',
    age: 66,
    address:'Sylhet',
    getDetails: function (amount, name1, name2){
        const details = `I am ${this.name}. My age is ${this.age}. I am from ${this.address}. My salary is ${amount}. My friend name is ${name1}, ${name2}`
        console.log(details)
        // return details
    }
}
const oldPeople = {
    name:'Sohun Vai',
    age: 121,
    address:'Uganda'
}
student.getDetails.call(oldPeople, 5000, 'abdur', 'Mohammad')
student.getDetails(3400)










// JavaScript Apply Method

const student = {
    name:'Taher Mamun',
    age: 66,
    address:'Sylhet',
    getDetails: function (amount, name1, name2){
        const details = `I am ${this.name}. My age is ${this.age}. I am from ${this.address}. My salary is ${amount}. My friend name is ${name1}, ${name2}`
        console.log(details)
        // return details
    }
}
const oldPeople = {
    name:'Sohun Vai',
    age: 121,
    address:'Uganda'
}


student.getDetails.apply(oldPeople, [5000, 'abdur', 'Mohammad'])
student.getDetails(3400)







// JavaScript bind Method

const student = {
    name:'Taher Mamun',
    age: 66,
    address:'Sylhet',
    getDetails: function (amount, name1, name2){
        const details = `I am ${this.name}. My age is ${this.age}. I am from ${this.address}. My salary is ${amount}. My friend name is ${name1}, ${name2}`
        // console.log(details)
        return details
    }
}
const oldPeople = {
    name:'Sohun Vai',
    age: 121,
    address:'Uganda'
}

const user =  student.getDetails.bind(oldPeople, 5000, 'abdur', 'Mohammad')

console.log(user())

student.getDetails(3400)
