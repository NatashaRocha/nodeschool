const fs = require('fs')
const path = process.argv[2]

content = fs.readFileSync(path, { encoding: 'utf8' })

console.log(content.split('\n').length - 1)