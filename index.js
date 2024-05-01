// Import packages
const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

// Set up middlewares for server to accept form data and return json
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Set view engine to ejs
app.set('view engine', 'ejs')

// Routes
const todoRoutes = require('./routes/todoRoutes')
const productRoutes = require('./routes/productRoutes')

app.use('/todos', todoRoutes)
app.use('/products', productRoutes)

// Start server
app.listen(process.env.BACKEND_PORT, () => {
  console.log(`Server is running on port ${process.env.BACKEND_PORT}...`)
})