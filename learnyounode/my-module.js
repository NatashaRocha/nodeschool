const fs = require('fs')
const path = require('path')

module.exports = (directory, ext, callback) => {
    const extension = "." + ext

    fs.readdir(directory, (err, list) => {
        if (err) return callback(err)
        return callback(null, list.filter(file => path.extname(file) === extension))
    })
}