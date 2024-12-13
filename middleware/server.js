// const express=require('express');
// var bodyParser = require('body-parser')
// const app=express()
// app.use(bodyParser.urlencoded())
// app.post("/",(req,res)=>{
//     console.log(req.body);
//     res.send("home")
    
// })

// app.listen(3000,()=>{
//     console.log("Server Created");
    
// })




// sample>




// const express=require('express')
// var bodyParser =require('body-parser')
// const { log } = require('console')
// const app=express()
// app.use(bodyParser.urlencoded())
// app.post("/",(req,res)=>{
//     console.log(req.body);
//     res.send("Homieeeee")
    
// })
// app.listen(3000,()=>{
//     console.log("lessgoooo");
    
// })


//////////////////////////////////


// const express=require('express')
// const app=express();
// app.use(express.json())

// app.post("/",token,(req,res)=>{
//     console.log("endpoint");

//     console.log(req.body);
//     res.send("home")  
// })
// app.listen(3000,()=>{
//     console.log("server started");
    
// })
// function token(req,res,next){
//     console.log("middle");
//     console.log(req.body);
//     next() 
// }




// SamPle work >

// const express=require("express")
// const app=express();
// app.use(express.json())

// app.post("/",token,(req,res)=>{
//     console.log("end-POint");
//     console.log(req.body);
//     res.send("go hOmie")
// })
// app.listen(3000,()=>{
//     console.log("less gOOOO");
    
// })
// function token(req,res,next){
//     console.log("middle");
//     console.log(req.body);
//     next()
    
    
// }




/////////////////////////////////////////////////






const express=require('express');
const app=express();
app.use(express.json())

app.post("/",token,(req,res)=>{
    console.log("endpoint");
    console.log(req.body);
    res.send("home")
    
    
})

app.get("/data",(req,res)=>{
    // const{id}=req.params
    console.log(req.query);
    // console.log(req.params);
    res.send("data")
    
})
app.listen(3001,()=>{
    console.log("server created");
    

})

function token(req,res,next){
    console.log("middle");

    console.log(req.body);
    next()
    
}