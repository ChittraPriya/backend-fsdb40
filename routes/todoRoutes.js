
//import express
const express = require("express");
const { getAllTodos, getTodoByID, createTodo, updateTodo, patchTodo, deleteTodos } = require("../controllers/todoController");
const { isAuthenticated, allowedRules } = require("../middleware/auth");

//set up a router=> express
const todoRouter = express.Router();

//setup the routes using the router
//public routes - unauthenticated users
todoRouter.get("/",getAllTodos);
todoRouter.get('/:id',getTodoByID);

//protected routes:allowed roles: ['user]
todoRouter.post("/",isAuthenticated, createTodo);
todoRouter.put("/:id",isAuthenticated,updateTodo);

//protected routes: allowed roles: ['admin']
todoRouter.delete('/:id',isAuthenticated,allowedRules(['admin']),deleteTodos)

//export the router
module.exports = todoRouter;