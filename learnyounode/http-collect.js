const http = require('http')

const url = process.argv[2]

http.get(url, (res) => {
    let response = ""
    res.setEncoding('utf8')
    res.on("data", data => {
        response += data
    })

    res.on("end", () => {
        console.log(response.length)
        console.log(response)
    })
})