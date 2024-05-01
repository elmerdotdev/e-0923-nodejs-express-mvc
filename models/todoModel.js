class Todo {
  constructor(id, task, completed) {
    this.id = id;
    this.task = task;
    this.completed = completed;
  }
}

// In-memory database
const todos = [
  {
    id: 1,
    task: 'Wash dishes',
    completed: false
  },
  {
    id: 2,
    task: 'Clean clothes',
    completed: false
  }
]

module.exports = {
  Todo,
  todos
}