

// path

const path = require('path')

const myPath = 'C:/Users/HP/Desktop/LearnNodeJS/style.css'


console.log(path.format(myPath));
console.log(path.dirname('./index.js'));


// os
const os = require('os')
console.log(os.homedir());
console.log(os.cpus());
console.log(os.hostname());
console.log(os.platform());
console.log(os.networkInterfaces());




// file system

const fs = require('fs')

fs.writeFileSync('myFile.txt', 'Hello programming')
fs.appendFileSync('myFile.txt','ami hobo tumar bangla desi')

const readFile = fs.readFile('./myFile.txt', (err,data)=>{
    console.log(data.toString())
})

console.log('hello me ');




// create new server with http

const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url === '/index') {

        fs.readFile('./index.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': data.length });
            res.write(data);
            res.end();
        })
    }
    else if (req.url === '/test') {
        fs.readFile('./test.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': data.length });
            res.write(data);
            res.end();
        })
    }
    else{
        fs.readFile('./404.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': data.length });
            res.write(data);
            res.end();
        })  
    }
})
server.listen(8080)



