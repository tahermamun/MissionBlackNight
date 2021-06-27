
var num1 = 300


function check() {
    var str = 'outer scope'

    return function () {
       console.log(str , num1)
    }
}





