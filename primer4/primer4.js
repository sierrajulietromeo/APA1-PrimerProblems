//import Product from './Product.js';
//import Inventory from './Inventory.js';


// // Sample usage for original base code
// const inventory = new Inventory();
// const product1 = new Product("A123", "T-shirt", 19.99, 100);
// const product2 = new Product("B456", "Jeans", 49.99, 50);

// try {
//   inventory.addProduct(product1);
//   inventory.addProduct(product2);
//   inventory.updateQuantity("A123", 50);
//   const retrievedProduct = inventory.getProduct("B456");
//   console.log(retrievedProduct);
//   inventory.removeProduct("A123");
// } catch (error) {
//   console.error("An error occurred:", error.message);
// }

import Inventory from './Inventory.js';
import Product from './Product.js';
import Clothing from './Clothing.js';
import Electronics from './Electronics.js';

const inventory = new Inventory();

// Create instances of different product types
const product1 = new Product("A123", "T-shirt", 19.99, 100);
const product2 = new Product("A123", "Jacket", 21.99, 100); // same ID as above
const clothing1 = new Clothing("C789", "Jacket", 79.99, 20, "L", "Leather");
const electronics1 = new Electronics("E456", "Laptop", 1299.99, 10, "Apple", "1 year");

// Add products to the inventory
inventory.addProduct(product1);

// Attempt to product with duplicate id (should throw an error)
try {
  inventory.addProduct(product2); 
} catch (error) {
  console.error("An error occurred:", error.message);
}

inventory.addProduct(clothing1);
inventory.addProduct(electronics1);

// Update quantity of a product
inventory.updateQuantity("A123", 50);

// Retrieve a product and log its details
const retrievedProduct = inventory.getProduct("C789");
console.log(retrievedProduct);

// Remove a product from the inventory
inventory.removeProduct("E456");

// Attempt to retrieve a removed product (should throw an error)
try {
    inventory.getProduct("E456");
} catch (error) {
    console.error("An error occurred:", error.message);
}
