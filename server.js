//Import Third party library - Nodejs framework = Express
const express = require('express');

//create an express app
const app = express();

//configure route to the application
app.get("/test",(req,res) =>{
    res.json({message: "Hello World"})
})

//start the express application
app.listen(3000,(error)=>{
    if(error){
        console.log("Error Starting the server",error.message)
    }
    console.log("server is listenting at http://localhost:3000 ....")
})
