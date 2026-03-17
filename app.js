
//Import Third party library - Nodejs framework = Express
const express = require('express');
const todoRouter = require('./routes/todoRoutes.js');
const authRouter = require('./routes/authRoutes.js');
const cookieParser = require('cookie-parser');

//create an express app
const app = express();

//entry point
//parse the request body
//data receive
app.use(express.json());

//parse the cookies
app.use(cookieParser());

//configure route to the application
app.use("/todos", todoRouter)
app.use('/auth', authRouter)


module.exports = app;