const fs = require('fs')
const { Transform } = require('stream')
const server = require('http').createServer()

const port = process.argv[2]

const upperCaseTransform = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase())
        callback()
    }
})

server.on('request', (req, res) => {
    req.pipe(upperCaseTransform).pipe(res)
})

server.listen(port)