Node.js
=================

2009 Ryan Dhal(May 27 2009)

It is a JavaScript Framework

Java Script was created 23 years Ago.

Open Source and Server side plateform


It is Used for developing web Applications,
Application Servers,
Network servers or client
for General purpose Programming



It is Single Threaded
Non Blocking IO
Asynchronous Calls,
Event driven architecture( It means that the server only reacts when an event occurs. This will allow us to create high performance, highly scalable, and real time applications)
Lightweight

It is a Platform built on Chrome's JavaScript Runtime for easily Building fast, scalable, and networked Applications.


Java, PHP, ASP.NET--> Multi threaded

What we can Build:

1. REST APIs and Backend Applications
2. Real time Services(Chat Servers , Games)
3. Blogs, CMS, Social Applications


UPU intensive()


REPL?
Python?
R - Read: It reads user's input , parse the input into JavaScript data-structure and store in Memory

E - Evaluate: It takes and Evaluates the Data structure

P--Print: It print the Evaluated result

L - Loop: It loos the above command until user press ctrl+c twice


Jshell(REPL standard)

package.json file:
--------------------
This file is used to hold the metadata about the partiocular project
This information is being provided to the NPM to manage necessary information to understand how the project should handle along with the dependencies

And this file is located at the root directory of the node project

node_module(30000)

npm init (package.json)
npm install module_name
npm uninstall module_name
npm search module_name


Create Custom Modules:
-------------------
In Node, a module is a function that has to be exported or exposed to other modules. you can Export a function by using the module.exports or exports object. This will allow the function to be accessed as a module in any other node application or module by using the require() function.

The exports is an Object that is included by default in every node application.
Any function that is being assigned to the exports object will be become a module that can be accessed by Node applications.

async.js(series):
---------------------
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


----------------------------------------------------
Callback Function:

var fs = require('fs');

fs.readFile('data.txt', function(error, data) {  
    if (error) {  
        console.error(error);  
        return;  
    }  
    console.log(data.toString());  
});


Emitting Events:

1. One Time Event Handlers:
   
   Sometimes you may be interested in reacting to an event only the first time it occurs.
   This situation uses the once() method.

 2. Inspecting Event Listeners:
 
  An emitter can have zero or more listeners which are attached with it.
  
  We are only interested to determine the number of attached listeners.
  EventEmitter.listenerCount()

  
  Promise:
  A promise in node.js promised to do some work and then septate callbacks that would be executed for success and failure as well and it also handle timeouts

React.js:
----------------------------

