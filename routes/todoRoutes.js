const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todoController')

// Display todos in page
router.get('/view', (req, res) => {
  const todos = todoController.getAllTodos()
  res.render('todos', {
    todoItems: todos
  })
})

// Get todos
router.get('/', (req, res) => {
  const todos = todoController.getAllTodos()
  res.json(todos)
})

// Add a todo
router.post('/', (req, res) => {
  const { task, completed } = req.body
  const todo = todoController.createTodo(task, completed)
  res.status(201).json(todo)
})

// Get todo by id
router.get('/:id', (req, res) => {
  const { id } = req.params
  const todo = todoController.getTodoById(parseInt(id))
  if (!todo) {
    res.status(404).json({ error: 'Todo was not found' })
  } else {
    res.json(todo)
  }
})

// Update todo by id
router.put('/:id', (req, res) => {
  const { id } = req.params
  const { task, completed } = req.body
  const todo = todoController.updateTodoById(parseInt(id), task, completed)
  if (!todo) {
    res.status(404).json({ error: 'Todo was not found' })
  } else {
    res.json(todo)
  }
})

// Delete todo by id
router.delete('/:id', (req, res) => {
  const { id } = req.params
  const result = todoController.deleteTodoById(parseInt(id))
  if (result) {
    res.status(204)
    res.end()
  } else {
    res.status(404).json({ error: 'Todo not found' })
  }
})

module.exports = router