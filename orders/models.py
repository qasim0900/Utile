from django.db import models
from users.models import APIUser
from services.models import Product

#-------------------------------
# :: Basket Model Class
#-------------------------------

""" 
basket model to store user baskets and their items.
"""

class Basket(models.Model):
    user = models.ForeignKey(APIUser, on_delete=models.CASCADE, related_name='baskets')
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    longitude = models.FloatField(null=True, blank=True)
    latitude = models.FloatField(null=True, blank=True)
    address = models.TextField(blank=True)
    requested_service = models.CharField(max_length=200, blank=True)
    status = models.CharField(max_length=50, default='pending')
    customer_name = models.CharField(max_length=200, blank=True)
    profile_image = models.ImageField(upload_to='basket/', default='default_profile.png')
    service = models.CharField(max_length=200, blank=True)


    #-------------------------------
    # :: __str__ Method
    #-------------------------------

    """ 
    string representation of the Basket model.
    """

    def __str__(self):
        return f"Basket #{self.id} by {self.user.username}"



#-------------------------------
# :: BasketItem Model Class
#-------------------------------

""" 
basket item model to store individual items within a user's basket.
"""

class BasketItem(models.Model):
    basket = models.ForeignKey(Basket, on_delete=models.CASCADE, related_name='items')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    user = models.ForeignKey(APIUser, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    longitude = models.FloatField(null=True, blank=True)
    latitude = models.FloatField(null=True, blank=True)


    #-------------------------------
    # :: total_price Method
    #-------------------------------

    """ 
    returns the total price of the basket item.
    """
    
    @property
    def total_price(self):
        return self.price * self.quantity


    #-------------------------------
    # :: __str__ Method
    #-------------------------------

    """ 
    returns the string representation of the basket item.
    """

    def __str__(self):
        return f"{self.product.name} x {self.quantity}"



#-------------------------------
# :: Order Model Class
#-------------------------------

""" 
order model to store user orders and their details.
"""

class Order(models.Model):
    user = models.ForeignKey(APIUser, on_delete=models.CASCADE, related_name='orders')
    requested_client = models.ForeignKey(APIUser, on_delete=models.CASCADE, related_name='orders_as_client')
    basket = models.OneToOneField(Basket, on_delete=models.CASCADE, related_name='order')
    total_price = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)
    date_ordered = models.DateTimeField(auto_now_add=True)
    address = models.CharField(max_length=255, default="Pakistan")


    #-------------------------------
    # :: __str__ Method
    #-------------------------------

    """ 
    returns the string representation of the order.
    """

    def __str__(self):
        return f"Order #{self.id} by {self.user.username}"
