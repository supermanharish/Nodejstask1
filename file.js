console.log("welcome nodejs")
console.log("I am working good")
const fs = require("fs")

console.log(process.argv)
const [, ,name2,name4] = process.argv;
console.log("command line value is ",name2,name4);

 const os = require("os")

// fs.unlink("./newfile.txt", (err)=>{
//     if(err){
// console.log(err)        
//     }else{
//         console.log("file deleted successfully")
//     }
// })

console.log("current filename name",__filename)
console.log("current directory name",__dirname)


console.log("free memory",os.freemem())
console.log("Version",os.version())
console.log("Total memory",os.totalmem())



console.log("cpu---",os.cpus())


let time = Date.now();
console.log("Time",time)
let date = new Date();
console.log("Date-----",date)
console.log("Today------",date.getDate())
console.log("Month-----",date.getMonth())
console.log("Year",date.getFullYear())
console.log("UTVString----",date.toUTCString().slice(0,17))
