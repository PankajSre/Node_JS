var inputfile = require('fs');
var data = inputfile.readFile("datas.txt", 'utf8', function (err, data) {
    if (err) {
        console.error('This is an Error!', err);
    }
    else {
        console.log(data);
    }
});
console.log('Done!');