const { Product, products } = require('../models/productModel')

// BREAD - Browse, Read, Edit, Add, Delete

// Browse - Get list of products
function getAllProducts() {
  return products
}

// Read - Get product by id
function getProductById(productId) {
  const foundProduct = products.find(product => product.id === productId)
  if (foundProduct) {
    return foundProduct
  } else {
    return false
  }
}

// Edit - Update product by id
function updateProductById(productId, productName, productPrice) {
  const foundProduct = products.find(product => product.id === productId)
  if (foundProduct) {
    foundProduct.productName = productName || foundProduct.productName
    foundProduct.productPrice = productPrice || foundProduct.productPrice
  }
  return foundProduct
}

// Add - Create new product
function createProduct(productName, productPrice) {
  const productToAdd = new Product(products.length + 1, productName, productPrice)
  products.push(productToAdd)
  return productToAdd
}

// Delete - Delete product by id
function deleteProductById(productId) {
  const foundIndex = products.findIndex(product => product.id === productId)
  if (foundIndex !== -1) {
    products.splice(foundIndex, 1)
    return true
  }
  return false
}

module.exports = {
  getAllProducts,
  getProductById,
  updateProductById,
  createProduct,
  deleteProductById
}
