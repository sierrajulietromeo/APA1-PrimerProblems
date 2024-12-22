class Product:
    def __init__(self, id, name, price, quantity):
        self._id = id
        self._name = name
        self._price = price
        self._quantity = quantity
    
    @property
    def id(self):
        return self._id
    
    @property
    def name(self):
        return self._name
    
    @property
    def price(self):
        return self._price
    
    @property
    def quantity(self):
        return self._quantity
    
    @quantity.setter
    def quantity(self, new_quantity):
        self._quantity = new_quantity
    
    def get_product_details(self):
        return {
            "id": self._id,
            "name": self._name,
            "price": self._price,
            "quantity": self._quantity
        }