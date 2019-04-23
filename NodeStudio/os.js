var os = require('os');

console.log('OS Architecture :'+ os.arch());
console.log('OS Modules : '+os.cpus());
console.log('Free Memory : '+ os.freemem()/(1024*1024*8));
console.log('Home Directory : '+os.homedir());
console.log('Host Name : '+ os.hostname());
console.log('Load : '+os.loadavg());
console.log('Network Interfaces : '+ os.networkInterfaces());
console.log('OS Plateform : '+os.platform());
console.log('OS Release : '+os.release());
console.log('Default directory for temp files : '+os.tmpdir());
console.log('Total Memory : '+os.totalmem()/(1024*1024*8));
console.log('OS Name : '+ os.type());
console.log('System Uptime : '+ os.uptime()/(60*60));
console.log('Password file Entry : '+os.userInfo(['Administrator']));