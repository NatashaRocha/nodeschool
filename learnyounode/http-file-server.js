const fs = require('fs')
const server = require('http').createServer()

const port = process.argv[2]
const file = fs.createReadStream(process.argv[3])

server.on('request', (req, res) => file.pipe(res))

server.listen(port)