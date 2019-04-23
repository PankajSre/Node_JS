var file = require('fs')

file.readFile('data.txt', 'utf8', function (err, data) {
    if (err) {
        console.log('There is Some error')
    } else {
        console.log(data)//1
    }
    console.log('Data Read Successful')//2
});
console.log("Data reading is in Progress")//3

//taks
//---1---2--3--4-  -------->