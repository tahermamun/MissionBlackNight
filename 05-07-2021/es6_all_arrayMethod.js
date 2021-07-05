// All Array Method one by one

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

function log(data) {
    console.log(data)
}
function dir(data) {
    console.dir(data)
}

// --------------------------------
// concat()

const fruits1 = ["Banana", "Orange"];
const fruits2 = ["Apple"];
const fruits3 = ["Mango"];
// let result = fruits1.concat(fruits2, fruits3)
// log(result)


// --------------------------------

// constructor
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let result =  fruits.constructor
// dir(result)





// --------------------------------

// copyWithin()
// copyWithin(target,start,end)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let result = fruits.copyWithin(2, 0, 1)
// log(result)
// Change main array




// --------------------------------
// entries() 

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// const f = fruits.entries();

// dir(f)
// for(let x of f){
//     log(x)
// }

// --------------------------------
// every()
// array.every(function(currentValue, index, arr), thisValue)
// const ages = [32, 33, 19, 40];

// let result = ages.every((currentValue, index, arr) => {

//     return currentValue > 18

// })

// log(result)

// --------------------------------
// fill

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.fill("Kiwi");

// let result = fruits.fill("Kiwi");
// log(result)

// --------------------------------

// filter
// array.filter(function(currentValue, index, arr), thisValue)




// --------------------------------
// find
// array.find(function(currentValue, index, arr),thisValue)



// --------------------------------

// findIndex
// array.findIndex(function(currentValue, index, arr), thisValue)



// --------------------------------
// forEach
// array.forEach(function(currentValue, index, arr), thisValue)




// --------------------------------
// from()
// Array.from(object, mapFunction, thisValue)

// var result = Array.from("ABCDEFG" )
// log(result)


// --------------------------------
// includes
// array.includes(element, start)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// var result = fruits.includes('Orange',3)
// log(result)


// --------------------------------
// indexOf()
// array.indexOf(item, start)

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];

// var result = fruits.indexOf('Apple',4)
// log(result)


// --------------------------------
// isArray()
// Array.isArray(obj)


// --------------------------------
// join()
// array.join(separator)


// --------------------------------
// keys()
// array.keys()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const key = fruits.keys();

// for (let x in key) {
//     log(x)
// }


// --------------------------------
// length()
// array.length

// --------------------------------
// lastIndex()
// array.lastIndexOf(item, start) ___controversial context
// const fruits = ["Orange", "Apple", "Orange", "Mango", "Apple", "Banana", "Apple"];
// var result = fruits.lastIndexOf("Orange", 4)
// log(result)


// --------------------------------

// map()
// array.map(function(currentValue, index, arr), thisValue)
// --------------------------------


// pop()
// Remove the last element of an array:

// --------------------------------
// push()
// Add a new item to an array:
// array.push(item1, item2, ..., itemX)


// --------------------------------
// reduce()
// array.reduce(function(previousValue, currentValue, currentIndex, arr), initialValue)

// const arr = [1, 2, 3, 4, 5]

// var mul = arr.reduce((previousValue, currentValue, currentIndex, arr) => {
// return previousValue * currentValue
// },1)

// log(mul)


// var sum = arr.reduce((previousValue, currentValue, currentIndex, arr) => {
//     return previousValue + currentValue
// }, 0)

// log(sum)




// --------------------------------
// reduceRight()
// array.reduceRight(function(total, currentValue, currentIndex, arr), initialValue)



// --------------------------------
// reverse()
// Reverse the order of the elements in an array:


// --------------------------------
// Shift
// Remove the first item of an array:


// --------------------------------
// slice
// array.slice(start, end)


// --------------------------------
// some()
// array.some(function(currentValue, index, arr), thisValue)
// const ages = [3, 10, 18, 20];
// var result = ages.some((currentValue, index, arr) => {
//     return currentValue < 1

// })
// log(result)

// --------------------------------
// sort
// array.sort(compareFunction)
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// var result =fruits.sort();
// log(result)


const number = [40, 100, 1, 5, 25, 10];

var result = number.sort((a, b) => {
    return b - a
});
log(result)



// --------------------------------
// splice
// array.splice(index, remove, item1, ....., itemX)


// --------------------------------
// toString()
// Convert an array to a string:


// --------------------------------
// unshift()
// Add new items to the beginning of an array:


// --------------------------------
// Value()
// valueOf() is the default method of any Array object:
