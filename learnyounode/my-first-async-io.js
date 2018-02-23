const fs = require('fs')
const path = process.argv[2]

content = fs.readFile(path, { encoding: 'utf8' }, (err, buffer) => (console.log(buffer.split('\n').length - 1)))