const http = require('http')
const fs = require('fs')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  const url = req.url
  if (url === '/') {
    fs.readFile('./index.html', (err, data) => {
      if (err) {
        throw err
      }
      res.statusCode = 200
      res.setHeader('content-type', 'text/html; charset=utf-8')
      res.end(data)
    })
  } else if (url === '/assets/css/main.css') {
    fs.readFile('./assets/css/main.css', (err, data) => {
      if (err) {
        throw err
        // new Error(err)
      }
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/css; charset=utf-8')
      res.end(data)
    })
  } else if (url === '/assets/js/main.js') {
    fs.readFile('./assets/js/main.js', (err, data) => {
      if (err) {
        throw err
      }
      res.statusCode = 200
      res.setHeader('content-type', 'text/javascript; charset=utf-8')
      res.end(data)
    })
  } else {
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('404 Not Found.')
  }
})

server.listen({
  port,
  hostname
}, () => {
  console.log( `Server running at http://${hostname}:${port}`)
})