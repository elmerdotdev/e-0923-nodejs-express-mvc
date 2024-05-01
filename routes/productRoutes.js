const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')

// Display products in page
router.get('/view', (req, res) => {
  const products = productController.getAllProducts()
  res.render('products', {
    productItems: products
  })
})

// Get products
router.get('/', (req, res) => {
  const products = productController.getAllProducts()
  res.json(products)
})

// Add a product
router.post('/', (req, res) => {
  const { productName, productPrice } = req.body
  const product = productController.createProduct(productName, productPrice)
  res.status(201).json(product)
})

// Get product by id
router.get('/:id', (req, res) => {
  const { id } = req.params
  const product = productController.getProductById(parseInt(id))
  if (!product) {
    res.status(404).json({ error: 'Product was not found' })
  } else {
    res.json(product)
  }
})

// Update product by id
router.put('/:id', (req, res) => {
  const { id } = req.params
  const { productName, productPrice } = req.body
  const product = productController.updateProductById(parseInt(id), productName, productPrice)
  if (!product) {
    res.status(404).json({ error: 'Product was not found' })
  } else {
    res.json(product)
  }
})

// Delete product by id
router.delete('/:id', (req, res) => {
  const { id } = req.params
  const result = productController.deleteProductById(parseInt(id))
  if (result) {
    res.status(204)
    res.end()
  } else {
    res.status(404).json({ error: 'Product not found' })
  }
})

module.exports = router