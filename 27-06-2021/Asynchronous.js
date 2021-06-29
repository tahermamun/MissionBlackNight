
// JavaScript Blocking Behaviour

const processOrder = () => {
    console.log('processing Order for customer 1')
    for (var i = 0; i <= 2000000000; i++) { }
    console.log('Cooking Complete for customer 1')
    console.log('Order processed for customer 1')
}
console.log('take Order for customer 1')
processOrder()
console.log('complete Order for customer 1')




// javaScript Non-blocking Behaviour

const processOrder = () => {
    console.log('processing Order for customer 1')
    setTimeout(() => {
        console.log('Cooking Complete for customer 1')
    }, 3000)
    console.log('Order processed for customer 1')
}
console.log('take Order for customer 1')
processOrder()
console.log('complete Order for customer 1')




// Control Order by callback function. That is an asynchronous way.


function takeOrder(customer, cb) {
    console.log(`take Order for ${customer}`)
    cb(customer)
}
const processOrder = (customer, cb) => {
    console.log(`processing Order for ${customer}`)
    setTimeout(() => {
        console.log(`Cooking Complete for ${customer}`)
        console.log(`Order processed for ${customer}`)
        cb(customer)
    }, 3000)
}
function completeOrder(customer) {
    console.log(`complete Order for ${customer}`)
}

takeOrder('customer 1', (customer) => {
    processOrder(customer, (customer) => {
        completeOrder(customer)
    })
})

console.log('check  agin ')




