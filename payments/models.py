from django.db import models
from users.models import APIUser
from services.models import Product

#---------------------------------------
# :: Credit Card Model Class
#---------------------------------------

""" 
CreditCard is a model for storing credit card details. It includes fields for user, name, number, expiration month and year,
and security code.
"""

class CreditCard(models.Model):
    user = models.ForeignKey(APIUser, on_delete=models.CASCADE, related_name='credit_cards')
    name = models.CharField(max_length=100)
    number = models.CharField(max_length=16)
    exp_month = models.PositiveSmallIntegerField()
    exp_year = models.PositiveSmallIntegerField()
    security_code = models.CharField(max_length=4)


    #--------------------------------
    # :: __str__ Method
    #--------------------------------

    """ 
    __str__ method provides a human-readable representation of the CreditCard instance, showing the last four digits of the card number.
    """

    def __str__(self):
        return f"Card ending {self.number[-4:]}"


#---------------------------------------
# :: PayPal Transaction Model Class
#---------------------------------------

""" 
PayPalTransaction is a model for storing PayPal transaction details. It includes fields for user, product, transaction ID, 
transaction details, payment status, payment amount, and creation timestamp.
"""

class PayPalTransaction(models.Model):
    user = models.ForeignKey(APIUser, on_delete=models.CASCADE, related_name='paypal_transactions')
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='paypal_transactions')
    transaction_id = models.CharField(max_length=100, unique=True)
    transaction_details = models.JSONField()
    payment_status = models.CharField(max_length=50, blank=True, null=True)
    payment_amount = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)


    #--------------------------------
    # :: __str__ Method
    #--------------------------------

    """ 
    __str__ method provides a human-readable representation of the PayPalTransaction instance, showing the transaction ID.
    """
    
    def __str__(self):
        return self.transaction_id
