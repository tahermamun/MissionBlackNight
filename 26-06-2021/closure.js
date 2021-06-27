// Closure class code


var num1 = 10
function check() {
    var num2 = 20
    var num3 = 30
    // return function(){
       return num1 + num2
    // }
}


var result = check()
console.dir(check)
// console.dir(result)


function stopWatch() {
    var count = 0;
    return function () {
        count++;
        return count
    }
}

var clock1 = stopWatch()

// console.dir(stopWatch)
// console.dir(clock1)
console.log(clock1())
console.log(clock1())
console.log(clock1())

var clock2 = stopWatch()
console.log(clock2())
console.log(clock2())
console.log(clock2())