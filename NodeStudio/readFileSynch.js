var file = require('fs')
file.readFileSync('data.txt', 'utf8', function (err, data) {
    if (err) {
        console.log('There is Some error')
    } else {
        console.log(data)
    }
});

console.log("Data Read Successfully")


