const http = require('http');
const fs = require("fs")
const url = require("url")

const hostname =  "127.0.0.1"
const port = 8080

http.createServer((req,res) => {
    const q = url.parse(req.url, true)
    const filename = "." + q.pathname
    fs.readFile(filename, (err,data) => {
        if(err) {
            res.writeHead(404 ,{"Content-Type": "text/html"} )
            res.write(data)
            return res.end()
        }
        
        res.writeHead(200 , {"Content-Type": "text/html"})
        res.write(data)
        return res.end()
    })
    
}).listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`)
})