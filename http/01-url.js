const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  const url = req.url
  if (url === '/') {
    res.end('Hello World!')
    res.end
  } else if (url === '/a') {
    res.end('Hello a')
  } else if (url === '/b') {
    res.end('Hello b')
  } else {
    res.statusCode = 404
    res.end('404 Not Found....')
  }
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})