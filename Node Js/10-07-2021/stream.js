// const fs = require('fs')
// const ourReadStrem = fs.createReadStream(`${__dirname}/bigdata.txt`, 'utf8')

// ourReadStrem.on('data',(chunk)=>{
// console.log(chunk)
// })




// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.write('<html><head><title>Form</title></head>');
//         res.write(
//             '<body><form method="post" action="/process"><input name="message" /></form></body>'
//         );
//         res.end();

//     } else if (req.url === '/process' && req.method === 'POST') {
//         const body = []
//         req.on('data', (chunk) => {
//             body.push(chunk)
//         })
//         req.on('end', (chunk) => {
//             console.log('stream finished')
//             const parseBody = Buffer.concat(body).toString()
//             console.log(parseBody)

//         res.write('Thank you for submitting');
//         res.end();
//         })

//     } else {
//         res.write('Not found');
//         res.end();
//     }
// });

// server.listen(3000);

// console.log('listening on port 3000');







// const fs = require('fs')
// const ourReadStrem = fs.createReadStream(`${__dirname}/bigdata.txt`)
// const ourWriteStrem = fs.createWriteStream(`${__dirname}/output.txt`)

// // ourReadStrem.on('data',(chunk)=>{
// //     ourWriteStrem.write(chunk)
// // // console.log(chunk)
// // })

// ourReadStrem.pipe(ourWriteStrem)




// const http = require('http');
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//     const myReadStream = fs.createReadStream(__dirname + '/bigdata.txt', 'utf8')

//     myReadStream.pipe(res)

// });

// server.listen(3000);

// console.log('listening on port 3000');



    





















// const fs = require('fs')
// const readStream = fs.createReadStream(__dirname + '/bigdata.txt', 'utf8')
// readStream.on('data', (data) => {
//     console.log(data)
// })



// const http = require('http')
// const fs = require('fs')
// const server = http.createServer((req, res) => {

//     if (req.url === '/') {
//         res.write(`<html>
//             <head>
//               <form method="post" action="process">
//                 <input type="text" name="message" />
//               </form>
//             </head>
//           </html>`)
//         res.end()

//     }
//     else if (req.url === '/process' && req.method === 'POST') {
//         const body = []
//         req.on('data', (chunk) => {
//             body.push(chunk)
//             console.log(chunk)
//         })
//         req.on('end', () => {
//             const parse = Buffer.concat(body).toString()
//             console.log(parse)

//             res.write('Thnak you for submiting')
//             res.end()
//         })
//     }
//     else {
//         res.write('errorss')
//         res.end()
//     }
// })
// server.listen(8080)





const fs = require('fs')


// const ouReadStream = fs.createReadStream(__dirname + '/bigdata.txt')
// const ourWriteStream = fs.createWriteStream(__dirname + '/output.txt')

// ouReadStream.on('data', (chunk) => {

//     ourWriteStream.write(chunk)
//     console.log(chunk.toString())
// })

// ouReadStream.pipe(ourWriteStream)


const http = require('http')


const server = http.createServer((req, res) => {
    const myReadStream = fs.createReadStream(__dirname+'/bigdata.txt', 'utf8')

myReadStream.pipe(res)

-+
})
server.listen(8080)