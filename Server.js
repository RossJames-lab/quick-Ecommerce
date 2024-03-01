const express = require('express');
const app = express();

// Sample product data
const products = [
  { id: 1, name: 'Product 1', price: 10.99, description: 'Description for Product 1' },
  { id: 2, name: 'Product 2', price: 19.99, description: 'Description for Product 2' },
  { id: 3, name: 'Product 3', price: 29.99, description: 'Description for Product 3' }
];

// Route to handle GET request for product details
app.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  // Find the product with the specified ID
  const product = products.find(product => product.id === productId);
  if (product) {
    res.json(product); // Send product details as JSON response
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
