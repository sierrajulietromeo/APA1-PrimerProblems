class Inventory:
    def __init__(self):
        self._products = {}
    
    def add_product(self, product):
        if product.id in self._products:
            raise ValueError(f"Product with ID {product.id} already exists.")
        self._products[product.id] = product
    
    def update_quantity(self, id, quantity):
        if id not in self._products:
            raise ValueError(f"Product with ID {id} not found.")
        self._products[id].quantity = quantity
    
    def get_product(self, id):
        if id not in self._products:
            raise ValueError(f"Product with ID {id} not found.")
        return self._products[id].get_product_details()
    
    def remove_product(self, id):
        if id not in self._products:
            raise ValueError(f"Product with ID {id} not found.")
        del self._products[id]
    
    def get_num_of_items(self):
        return len(self._products)