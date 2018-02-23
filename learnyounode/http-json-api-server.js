const url = require('url')
const server = require('http').createServer()
const PORT = process.argv[2]

server.on('request', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    query = url.parse(req.url, true).query // { iso: 2013-08-10T12:10:15.474Z }

    if (/\/api\/parsetime/.test(req.url)) {
        const date = new Date(query.iso)

        res.end(JSON.stringify({
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        }))
    }
    
    if (/\/api\/unixtime/.test(req.url)) {
        res.end(JSON.stringify({
            unixtime: Date.parse(query.iso)
        }))
    }

    res.end()
})

server.listen(PORT)