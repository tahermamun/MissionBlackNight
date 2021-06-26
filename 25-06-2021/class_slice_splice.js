


// JavaScript Class
class Guardians {
    constructor(fatherName, motherName, phone) {
        this.fatherName = fatherName,
            this.motherName = motherName,
            this.phone = phone
    }
}
class Student extends Guardians {
    constructor(name, age, address, college = 'Pagla Garod', fatherName, motherName, phone) {
        super(fatherName, motherName, phone)
        this.name = name,
            this.age = age,
            this.address = address,
            this.college = college
    }
    emergency() {
        const contact = `Contact__Student: ${this.name} Father: ${this.fatherName}, Father Phone Number: ${this.phone}`
        return contact
    }
}

const student1 = new Student('Taher Mamun', 56, 'Sylhet', 'Mohammad Govt college', 'Mohammad', 'Khairun', '01752833849')
const student2 = new Student('Suhan', 92, 'Kulna')
const student3 = new Student('Anondo', 12, 'Kurigram', 'khudiram patshala')

console.log(student1.emergency())
console.log(student2.emergency())
console.log(student3.emergency())



// JavaScript Splice Method
var splice_arr1 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// splice_arr1.splice(index,remove,insert)
splice_arr1.splice(2,0,'Taher')
console.log(splice_arr1)



// JavaScript Slice Method
var arr = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// var arr2 = arr.slice(start,end)
var arr2=arr.slice(1, 3)
console.log(arr)
console.log(arr2)

