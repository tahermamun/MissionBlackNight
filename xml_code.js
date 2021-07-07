// way One_________________

// const getButton = document.getElementById('get-button')
// const sendButton = document.getElementById('send-button')



// const getData = function () {
//     const xhr = new XMLHttpRequest()
//     xhr.open('GET','https://jsonplaceholder.typicode.com/users')
//     // xhr.responseType = 'json'
//     xhr.send()
//     xhr.onload = function(){
//         const result = xhr.response
//         console.log(JSON.parse(result))
//     }

// }
// const sendData = function () { 

// }


// getButton.addEventListener('click', getData)
// sendButton.addEventListener('click', sendData)



// ____________




const getButton = document.getElementById('get-button')
const sendButton = document.getElementById('send-button')



const sendRequest = function (method, url, data) {

    const promise = new Promise((resolve, reject) => {


        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.responseType = 'json'
        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.send(data)
        xhr.onload = function () {

            if (xhr.status >= 400) {
                reject(xhr.response)
            }
            else {
                resolve(xhr.response)
            }
        }
        
        xhr.onerror = function () {
            reject('something was wrong')
        }

    })
    return promise
}



const getData = function () {
    sendRequest('GET', 'https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res)
        })
}
const sendData = function () {
    sendRequest('POST', 'https://jsonplaceholder.typicode.com/posts', JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    })).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })


}


getButton.addEventListener('click', getData)
sendButton.addEventListener('click', sendData)