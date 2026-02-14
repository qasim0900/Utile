from rest_framework import serializers
from users.models import AccountVerification
from .models import CreditCard, PayPalTransaction

#--------------------------------------
# :: Credit Card Serializer Class
#--------------------------------------

""" 
CreditCardSerializer is a serializer for the CreditCard model. It includes fields for name, number, 
expiration month and year, and security code.
"""

class CreditCardSerializer(serializers.ModelSerializer):
    
    #-------------------------
    # :: Meta Class
    #-------------------------

    """ 
    Meta class defines the model and fields to be serialized for the CreditCardSerializer. It specifies that the serializer
    """
    
    class Meta:
        model = CreditCard
        fields = ['name', 'number', 'exp_month', 'exp_year', 'security_code']


    #--------------------------------------
    # :: Create Method
    #--------------------------------------

    """ 
    The create method is overridden to handle the creation of a CreditCard instance. It retrieves the user from the request context,
    """

    def create(self, validated_data):
        user = self.context['request'].user
        card, created = CreditCard.objects.update_or_create(
            user=user,
            defaults=validated_data
        )
        AccountVerification.objects.update_or_create(
            user=user,
            defaults={'credit_card': True}
        )
        return card


# -----------------------------------------
# :: PayPal Transaction Serializer Class
# -----------------------------------------
class PayPalTransactionSerializer(serializers.ModelSerializer):
    
    #--------------------------------------
    # :: Meta Class
    #--------------------------------------

    """ 
    Meta class defines the model and fields to be serialized for the PayPalTransactionSerializer. It specifies that the serializer
    """

    class Meta:
        model = PayPalTransaction
        fields = '__all__'
