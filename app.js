
//Import Third party library - Nodejs framework = Express
const express = require('express');
const todoRouter = require('./routes/todoRoutes.js')

//create an express app
const app = express();

//configure route to the application
app.use("/todos", todoRouter)


module.exports = app;