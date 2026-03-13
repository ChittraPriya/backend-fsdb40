const todos = [
      {
    "createdAt": "2026-02-18T06:07:03.667Z",
    "title": "Alberta Zemlak",
    "description": "Innovative Computer featuring negligible technology and Cotton construction",
    "isCompleted": false,
    "id": "5"
  },
  {
    "createdAt": "2026-02-22T14:38:23.993Z",
    "title": "Meeting at 8PM Today",
    "description": "Meeting on the register issues",
    "isCompleted": true,
    "id": "7"
  },
  {
    "createdAt": "2026-02-22T00:29:15.689Z",
    "title": "Buy Fruits",
    "description": "Fruits..\n1.Apple\n2.Banana\n3.Papaya\n4.gauva",
    "isCompleted": true,
    "id": "8"
  }
]

const todoController = {
    getAllTodos: (req,res) => {
        res.json(todos)
    }
}

module.exports = todoController;