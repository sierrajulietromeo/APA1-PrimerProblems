import Product from './Product.js';
import Inventory from './Inventory.js';
import Clothing from './Clothing.js';
import Electronics from './Electronics.js';

// Making sure you are in the same folder, you can run this test file with: jest primer4.test.js

describe('Inventory', () => {
  let inventory;
  let product1, product2, clothing1, electronics1;

  beforeEach(() => {
    inventory = new Inventory();
    product1 = new Product("A123", "T-shirt", 19.99, 100);
    product2 = new Product("B456", "Jeans", 49.99, 50);
    clothing1 = new Clothing("C789", "Jacket", 79.99, 20, "L", "Leather");
    electronics1 = new Electronics("E456", "Laptop", 1299.99, 10, "Apple", "1 year");
  });

  describe('Adding Products', () => {
    test('can add products to the inventory', () => {
      inventory.addProduct(product1);
      inventory.addProduct(product2);
      expect(inventory.getNumOfItems()).toBe(2);
    });

    test('throws error when adding a product with a duplicate ID', () => {
      inventory.addProduct(product1);
      expect(() => inventory.addProduct(product1)).toThrow();
    });

    test('can add different product types to the inventory', () => {
      inventory.addProduct(product1);
      inventory.addProduct(clothing1);
      inventory.addProduct(electronics1);
      expect(inventory.getProduct("A123")).toEqual(product1.getProductDetails());
      expect(inventory.getProduct("C789")).toEqual(clothing1.getProductDetails());
      expect(inventory.getProduct("E456")).toEqual(electronics1.getProductDetails());
    });
  });

  describe('Updating Product Quantities', () => {
    test('can update the quantity of a product', () => {
      inventory.addProduct(product1);
      inventory.updateQuantity("A123", 75);
      expect(inventory.getProduct("A123").quantity).toBe(75);
    });

    test('throws error when updating the quantity of a non-existent product', () => {
      expect(() => inventory.updateQuantity("C789", 75)).toThrow();
    });
  });

  describe('Removing Products', () => {
    test('can remove a product from the inventory', () => {
      inventory.addProduct(product1);
      inventory.addProduct(product2);
      inventory.removeProduct("A123");
      expect(() => inventory.getProduct("A123")).toThrow();
      expect(inventory.getProduct("B456")).toEqual(product2.getProductDetails());
    });

    test('throws error when removing a non-existent product', () => {
      expect(() => inventory.removeProduct("C789")).toThrow();
    });
  });

  describe('Retrieving Product Details', () => {
    test('can retrieve the details of different product types', () => {
        inventory.addProduct(product1);
        inventory.addProduct(clothing1);
        inventory.addProduct(electronics1);

        expect(inventory.getProduct("A123")).toEqual({
            id: "A123",
            name: "T-shirt",
            price: 19.99,
            quantity: 100
        });

        expect(inventory.getProduct("C789")).toEqual({
            id: "C789",
            name: "Jacket",
            price: 79.99,
            quantity: 20,
            size: "L",
            material: "Leather"
        });

        expect(inventory.getProduct("E456")).toEqual({
            id: "E456",
            name: "Laptop",
            price: 1299.99,
            quantity: 10,
            brand: "Apple",
            warranty: "1 year"
        });
    });
  });
});