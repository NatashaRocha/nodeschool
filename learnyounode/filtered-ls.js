const fs = require('fs')
const path = require('path')
const folder = process.argv[2]
const extension = "." + process.argv[3]

fs.readdir(folder, (err, list) => {
    list.filter(file => path.extname(file) === extension).forEach(file => {
        console.log(file)
    })
})