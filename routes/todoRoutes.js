
//import express
const express = require("express");
const { getAllTodos, getTodoByID, createTodo, updateTodo, patchTodo, deleteTodos } = require("../controllers/todoController");

//set up a router=> express
const todoRouter = express.Router();

//setup the routes using the router
todoRouter.get("/",getAllTodos);
todoRouter.get('/:id',getTodoByID);
todoRouter.post("/", createTodo);
todoRouter.put("/:id",updateTodo);
todoRouter.patch('/:id',patchTodo);
todoRouter.delete('/:id',deleteTodos)
//export the router
module.exports = todoRouter;