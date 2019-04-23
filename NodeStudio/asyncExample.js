var async = require('async');
var fs = require('fs');

let sampletext = "This is the sample text that will go in the file.";

async.series([
    function(callback) {
     console.log('Make directory');
     fs.mkdir('hello', function(err){
         if(err){
             console.log("mkdir error!");
             return callback(err);             
         }
         callback();
     });
    },
    function(callback) {
      console.log('Write file');
      fs.writeFile('.//hello//write.txt', sampletext, function(err){
        if(err){
            console.log("writeFile error!");
            return callback(err);            
        }
        callback();
      });
    },
    function(callback){
        console.log('Read file');
        fs.readFile('.//hello//write.txt', 'utf8', function(err, data){
            if(err){
                console.log("readFile error!");
                return callback(err);                
            }
            else{
                console.log("File Data");
                console.log(data);
            }
            callback();
        });
    },
    function(callback){
        console.log('Delete file');
        fs.unlink('.//hello//write.txt', function(err){
            if(err){
                console.log("unlink error!");
                return callback(err);                
            }
            callback();
        });
    },
    function(callback){
        console.log('Delete directory');
        fs.rmdir('hello', callback);
    }
  ],function(err,data) {
      if(err){
          throw err;
      }
  console.log('Now Everything is finished');
});
