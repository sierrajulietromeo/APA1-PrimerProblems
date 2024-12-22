import pytest
from Product import Product
from Inventory import Inventory

@pytest.fixture
def inventory():
    return Inventory()

@pytest.fixture
def product1():
    return Product("A123", "T-shirt", 19.99, 100)

@pytest.fixture
def product2():
    return Product("B456", "Jeans", 49.99, 50)

def test_can_add_products_to_inventory(inventory, product1, product2):
    inventory.add_product(product1)
    inventory.add_product(product2)
    assert inventory.get_num_of_items() == 2

def test_throws_error_when_adding_duplicate_product(inventory, product1):
    inventory.add_product(product1)
    with pytest.raises(ValueError, match=f"Product with ID {product1.id} already exists."):
        inventory.add_product(product1)

def test_can_update_product_quantity(inventory, product1):
    inventory.add_product(product1)
    inventory.update_quantity("A123", 75)
    assert inventory.get_product("A123")["quantity"] == 75

def test_throws_error_when_updating_nonexistent_product(inventory):
    with pytest.raises(ValueError, match="Product with ID C789 not found."):
        inventory.update_quantity("C789", 75)

def test_can_remove_product_from_inventory(inventory, product1, product2):
    inventory.add_product(product1)
    inventory.add_product(product2)
    inventory.remove_product("A123")
    
    with pytest.raises(ValueError, match="Product with ID A123 not found."):
        inventory.get_product("A123")
    
    assert inventory.get_product("B456") == product2.get_product_details()

def test_throws_error_when_removing_nonexistent_product(inventory):
    with pytest.raises(ValueError, match="Product with ID C789 not found."):
        inventory.remove_product("C789")

def test_can_retrieve_product_details(inventory, product1, product2):
    inventory.add_product(product1)
    inventory.add_product(product2)
    
    assert inventory.get_product("A123") == {
        "id": "A123",
        "name": "T-shirt",
        "price": 19.99,
        "quantity": 100
    }
    
    assert inventory.get_product("B456") == {
        "id": "B456",
        "name": "Jeans",
        "price": 49.99,
        "quantity": 50
    }