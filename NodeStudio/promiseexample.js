// Install Promise Module
var prms = require('promise');
var promise = new Promise(function(resolve, reject) { //creating Promise

    setTimeout(resolve, 2000)
}) 
 promise.then(function(){

 }); 
 promise.then(function(){
     
 })    

promise.then(function() { // Using the Promise to set a condition
    console.log('Done!'); //onFulfilled
}) 
