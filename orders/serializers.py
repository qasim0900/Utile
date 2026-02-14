from rest_framework import serializers
from .models import Basket, BasketItem, Order

#---------------------------------
# :: BasketItem Serializer Class
#---------------------------------

""" 
basketItem Serializer to serialize BasketItem model data.
"""

class BasketItemSerializer(serializers.ModelSerializer):
    product = serializers.StringRelatedField(read_only=True)
    total_price = serializers.DecimalField(max_digits=10, decimal_places=2, source='total_price', read_only=True)



    #-------------------------------
    # :: Meta Class
    #-------------------------------

    """ 
    Meta class for BasketItemSerializer.
    """

    class Meta:
        model = BasketItem
        fields = [
            'id', 'basket', 'product', 'user', 'quantity', 'price',
            'total_price', 'longitude', 'latitude', 'location'
        ]



#-------------------------------
# :: Basket Serializer Class
#-------------------------------

""" 
Basket Serializer to serialize Basket model data.
"""

class BasketSerializer(serializers.ModelSerializer):
    items = BasketItemSerializer(many=True, read_only=True)
    distance = serializers.SerializerMethodField()


    #-------------------------------
    # :: MetaClass
    #-------------------------------

    """ 
    meta class for BasketSerializer.
    """

    class Meta:
        model = Basket
        fields = [
            'id', 'user', 'is_active', 'created_at', 'longitude', 'latitude',
            'location', 'address', 'requested_service', 'status', 'customer_name',
            'profile_image', 'service', 'items', 'distance'
        ]


    #-------------------------------
    # :: get_distance Method
    #-------------------------------

    """ 
    method to get formatted distance string.
    """

    def get_distance(self, obj):
        if hasattr(obj, 'distance') and obj.distance:
            return f"{obj.distance.km:.2f} KM" if obj.distance.km > 1 else f"{obj.distance.m:.2f} M"
        return None


#-------------------------------
# :: Order Serializer Class
#-------------------------------

""" 
Order Serializer to serialize Order model data.
"""

class OrderSerializer(serializers.ModelSerializer):
    basket = BasketSerializer(read_only=True)
    user = serializers.StringRelatedField(read_only=True)
    requested_client = serializers.StringRelatedField(read_only=True)


    #-------------------------------
    # :: Meta Class
    #-------------------------------

    """ 
    Meta class for OrderSerializer.
    """

    class Meta:
        model = Order
        fields = [
            'id', 'user', 'basket', 'total_price', 'date_ordered',
            'address', 'requested_client'
        ]
