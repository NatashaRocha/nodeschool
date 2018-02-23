const net = require('net')

const server = net.createServer(socket => {
    let date = new Date()
    socket.write(`${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice (-2)}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`)
    socket.end('\n')
})

server.listen(process.argv[2])