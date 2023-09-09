// const { time } = require("console")
//const { request } = require("http")
const express =require("express")   
const app = express()  
const fs = require("fs")
const path = require("path")
const dirPath = path.join(__dirname,"timestamps")

console.log(dirPath)
   
app.get("/timestamp",(req, res)=>{
        let date =new Date();
    const timeStampDate = `Last updated:${date.toUTCString().slice(0,-3)}`;
    fs.writeFileSync(`${dirPath}/current-date-time.txt`,timeStampDate,(err)=>{
        if(err){
        res.send({message:"error writting timeStamp"})
    }
    })
    res.sendFile(path.join(dirPath,"current-date-time.txt"))
    })

    app.listen(9000,()=>console.log (`Server started in localhost:9000`))