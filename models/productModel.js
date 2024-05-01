class Product {
  constructor(id, productName, productPrice) {
    this.id = id;
    this.productName = productName;
    this.productPrice = productPrice;
  }
}

// In-memory database
const products = [
  {
    id: 1,
    productName: 'Phone',
    productPrice: 499.99
  },
  {
    id: 2,
    productName: 'Laptop',
    productPrice: 1499.99
  }
]

module.exports = {
  Product,
  products
}