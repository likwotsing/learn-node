const http = require('http')
const fs = require('fs')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  fs.readFile('./index.html', (err, data) => {
    if (err) {
      throw err
    }
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end(data)
  })
  // res.end(`
  //   <h1>Hello World</h1>
  //   <p>你好，世界！</p>
  // `)
})

server.listen({
  port,
  hostname
}, () => {
  console.log( `Server running at http://${hostname}:${port}`)
})