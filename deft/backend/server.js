const express=require('express');
const path=require("path")
const app=express();
const PORT=3000;
app.get("/",(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,"frontend","index.html"))

})
app.get("*",(req,res)=>{
    res.send("Page not found")
})
app.listen(PORT,()=>{
    console.log("Server Created");
    
})