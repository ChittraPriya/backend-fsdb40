//Import Third party library - Nodejs framework = Express
const express = require('express');

//create an express app
const app = express();

//configure route to the application
app.get("/test",(req,res) =>{
    res.json({message: "Hello World"})
})

module.exports = app;