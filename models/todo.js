const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    "title": String,
    "description": String,
    "isCompleted": {
        default: false,
        type: Boolean
    }
},{timestamps: true})


module.exports = mongoose.model("Todo",todoSchema, "todos")