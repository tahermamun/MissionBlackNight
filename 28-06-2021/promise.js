// Promise Exercise 1

var hasOk = false
const promise = new Promise((resolve, reject) => {
    if (hasOk) {
        const user = {
            name: 'Sohun Vai',
            age: 121,
            address: 'Uganda'
        }
        resolve(user)
    }
    else{
        reject(new Error('It"s Error'))

    }
})

promise
    .then(res => {
        console.log(res)
    })
    .catch(err=>console.log(err.message))




// Promise Exercise 2 with fetch

const promise = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(res => resolve(res))
})

promise
    .then(res => console.log(res))
