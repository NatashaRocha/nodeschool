const mymodule = require('./my-module')

const directory = process.argv[2]
const extension = process.argv[3]

mymodule(directory, extension, (err, list) => {
    if (err) return err
    
    list.forEach(file => {
        console.log(file)
    })
})