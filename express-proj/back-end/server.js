// import express from "express"
// const PORT=3000;
// import mongoose, { connect }  from "mongoose";
// import todoSchema from "./Models/todo.model.js"
// const app=express();
// app.use(express.json())



// app.post("/addtodo",async(req,res)=>{
//     console.log(req.body);
//     const{task}=req.body
    


// // add data to datbase

// await todoSchema.create({task,isCompleted:false}).then(()=>{
//     res.status(201).send({msg:"succesfully added"})
// }).catch((error)=>{
//     res.status(400).send({error})
// })
// })

// // connect mongodb

// mongoose.connect("mongodb://127.0.0.1:27017/mern")
// .then(()=>{
//     console.log("Datbase connected");

//     //connect to port

//     app.listen(PORT,()=>{
//         console.log("LESSSS GOOO");
        
//     })
    
// })
// .catch((error)=>{
//     console.log(error);
    
// })



/////////////////////////////////////////////////


import express from "express"
const PORT=3000;
import mongoose, { connect, get }  from "mongoose";
import todoSchema from "./Models/todo.model.js"
const app=express();
app.use(express.json())



app.post("/addtodo",async(req,res)=>{
    console.log(req.body);
    const{task}=req.body
    


// add data to datbase

await todoSchema.create({task,isCompleted:false}).then(()=>{
    res.status(201).send({msg:"succesfully added"})
}).catch((error)=>{
    res.status(400).send({error})
})
})
// get todos
app.get("/gettodos",async(req,res)=>{
    try {
        const todo=await todoSchema.find();
        res.status(200).send(todos)
    
    } catch (error) {
     res.status(500).send(error)   
    }
})
// isCompleted

app.put("/iscompleted/:_id",async(req,res)=>{

    const{_id}=req.params;
    const{isCompleted}=req.body;

    await todoSchema.updateOne({_id},{$set:{isCompleted:!isCompleted}})
    .then(()=>{
        res.status(201).send({msg:"successfully updated"})
    })
    .catch((error)=>{
        res.status(500).send({error})
    })

})

//delete

app.delete("/deletetodo/:_id",async(req,res)=>{

    const{_id}=req.params;
    console.log(_id);

    await todoSchema.deleteOne({_id})
    .then(()=>{
        res.status(201).send({msg:"successfully deleted"})
    })
    .catch((error)=>{
        res.status(500).send({error})
    })

})


// connect mongodb

mongoose.connect("mongodb://127.0.0.1:27017/mern")
.then(()=>{
    console.log("Datbase connected");

    //connect to port

    app.listen(PORT,()=>{
        console.log("LESSSS GOOO");
        
    })
    
})
.catch((error)=>{
    console.log(error);
    
})
