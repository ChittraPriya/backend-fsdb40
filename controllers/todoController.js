const Todo = require ('../models/todo.js')
const todoController = {
    getAllTodos: async (req,res) => {
      try {
        const todos = await Todo.find({}, { "__v":0 });
        return res.status(200).json(todos)
      } catch (error) {
        return res.status(500).json({message: `Fetching all Todos failed :${error.message}`
        })
      }
    },
    createTodo: async (req,res) => {
      try {
        //get the data
        const { title, description} = req.body
        //create a new model object using the received data
        const newTodo = new Todo({
          title,
          description
        }) 
        //save the new todo object in the database
        const saveTodo = await newTodo.save();
        return res.status(200).json({message: "todo created successfully",data: saveTodo})
      } catch (error) {
        return res.status(500).json({message: `Creating all Todos failed :${error.message}`
        })
      }
    },
    getTodoByID: async (req,res) => {
      //get the todo id from params
      try {
        const {id} = req.params
        const todo = await Todo.findById(id)
        res.status(200).json(todo);
        
      } catch (error) {
        return res.status(500).json({
          message: `Fetching todo failed: ${error.message}`
        })
      }
    },
    updateTodo: async (req,res) => { 
      try {
        //update
        const {id} = req.params
        //get data to be updated from the request body
        const {isCompleted,title,description} = req.body;
        const updateTodo = await Todo.findByIdAndUpdate(id, {isCompleted,title,description}, {new: true})
        res.status(200).json({ message:"todo update successfully", data: updateTodo});
        
      } catch (error) {
        return res.status(500).json({
          message: `updateTodo todo failed: ${error.message}`
        })
      }             
    },
    patchTodo: async (req,res) => {
      try {
        //patch
        const {id} = req.params
        //get data to be updated from the request body
        const {isCompleted,} = req.body;
        const updateTodo = await Todo.findByIdAndUpdate(id, {isCompleted}, {new: true})
        res.status(200).json({ message:"todo update successfully", data: updateTodo});
        
      } catch (error) {
        return res.status(500).json({
          message: `updateTodo todo failed: ${error.message}`
        })
      } 
     },
    deleteTodos: async (req,res) => {
      //get the todo id from the request params
      try {
        const {id} = req.params;
        await Todo.findByIdAndDelete(id);
        res.status(200).json({message: 'Todo Deletion Successfully'})
      } catch (error) {
        return res.status(500).json({
          message: `Delete todo Failed:${error.message}`
        })
      }
    },

    }

module.exports = todoController;