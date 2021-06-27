



const check = (function () {
    const details = {
        name: 'Taher Mamun',
        age: 26,
        address: 'Sylhet'
    }
    return details
}())
const obj = Object.values(check)

// console.log(obj)

// obj.map(res =>console.log(res))



for (var i = 0; i < obj.length; i++) {
    console.log(obj[i])
}




// const result = check
// console.log(check.age)
