const http = require('http')

const urls = [process.argv[2], process.argv[3], process.argv[4]]
let responses = []
let sum = 0

httpGet = (url, i) => {
    http.get(url, res => {
        let response = ""
        res.setEncoding('utf8')
        res.on("data", data => response += data)
        res.on("end", () => {
            responses[i] = response
            sum += 1
            if (sum === 3) responses.forEach(res => console.log(res))
        })
    })
}

urls.forEach((url, index) => httpGet(url, index))