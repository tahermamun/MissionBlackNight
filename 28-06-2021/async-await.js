
// Async - Await Method In JavaScript
async function check() {
    try{
     const user = await fetch('https://jsonaplaceholder.typicode.com/users')
     const data = await  user.json()
     console.log(data)
    }
    catch{
        console.log('processing Error')
    }
 }
 check()
 