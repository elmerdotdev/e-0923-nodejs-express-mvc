const { Todo, todos } = require('../models/todoModel')

// BREAD - Browse, Read, Edit, Add, Delete

// Browse - Get list of todos
function getAllTodos() {
  return todos
}

// Read - Get todo by id
function getTodoById(todoId) {
  const foundTodo = todos.find(todo => todo.id === todoId)
  if (foundTodo) {
    return foundTodo
  } else {
    return false
  }
}

// Edit - Update todo by id
function updateTodoById(todoId, task, completed) {
  const foundTodo = todos.find(todo => todo.id === todoId)
  if (foundTodo) {
    foundTodo.task = task || foundTodo.task
    foundTodo.completed = completed || foundTodo.completed
  }
  return foundTodo
}

// Add - Create new todo
function createTodo(task, completed = false) {
  const todoToAdd = new Todo(todos.length + 1, task, completed)
  todos.push(todoToAdd)
  return todoToAdd
}

// Delete - Delete todo by id
function deleteTodoById(todoId) {
  const foundIndex = todos.findIndex(todo => todo.id === todoId)
  if (foundIndex !== -1) {
    todos.splice(foundIndex, 1)
    return true
  }
  return false
}

module.exports = {
  getAllTodos,
  getTodoById,
  updateTodoById,
  createTodo,
  deleteTodoById
}
