// true = capturing
// false = bubbling


document.getElementById('div1').addEventListener('click',function(){
    console.log('grand parent')
},true)

document.getElementById('div2').addEventListener('click',function(){
    console.log('parent')
},false)

document.getElementById('div3').addEventListener('click',function(){
    console.log('Children')
},true)