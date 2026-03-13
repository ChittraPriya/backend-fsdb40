
//import express
const express = require("express");
const { getAllTodos } = require("../controllers/todoContoller");

//set up a router=> express
const todoRouter = express.Router();

//setup the routes using the router
todoRouter.get("/",getAllTodos)
//export the router
module.exports = todoRouter;