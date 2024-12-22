from Product import Product
from Inventory import Inventory

# Sample usage
inventory = Inventory()
product1 = Product("A123", "T-shirt", 19.99, 100)
product2 = Product("B456", "Jeans", 49.99, 50)

try:
    inventory.add_product(product1)
    inventory.add_product(product2)
    inventory.update_quantity("A123", 50)
    retrieved_product = inventory.get_product("B456")
    print(retrieved_product)
    inventory.remove_product("A123")
except Exception as error:
    print("An error occurred:", str(error))