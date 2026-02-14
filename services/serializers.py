from django.conf import settings
from django.db import transaction
from geopy.geocoders import GoogleV3
from rest_framework import serializers
from django.contrib.gis.geos import Point
from .models import Product, Basket, BasketItems, UserInformation


#---------------------------------------
# :: Service Request Serializer Class
#---------------------------------------

""" 
ServiceRequestSerializer is a serializer for handling service requests. It includes fields for quantity, location, and service type,
"""

class ServiceRequestSerializer(serializers.ModelSerializer):
    quantity = serializers.IntegerField(min_value=1)
    latitude = serializers.FloatField()
    longitude = serializers.FloatField()
    service_type = serializers.CharField(write_only=True)


    #--------------------------------
    # :: Meta Model
    #--------------------------------

    """ 
    Meta class defines additional options for the ServiceRequestSerializer, such as the model it serializes and the fields to include
    """

    class Meta:
        model = BasketItems
        fields = ['quantity', 'latitude', 'longitude', 'service_type']


    #--------------------------------
    # :: _get_address Method
    #--------------------------------

    """ 
    _get_address method uses the GoogleV3 geocoder to convert latitude and longitude coordinates into a human-readable address. It returns the first address found for the given coordinates.
    """

    def _get_address(self, latitude, longitude):
        geocoder = GoogleV3(api_key=settings.GOOGLE_MAP_KEY)
        location_list = geocoder.reverse((latitude, longitude))
        return location_list[0] if location_list else None


    #--------------------------------
    # :: _get_user_profile Method
    #--------------------------------

    """ 
    _get_user_profile method retrieves the user profile information for the given user. It uses 
    elect_related to optimize the query by fetching related user information in a single database hit.
    """

    def _get_user_profile(self, user):
        return UserInformation.objects.select_related('user').get(user_id=user.id)


    #-----------------------------------
    # :: _get_or_create_basket Method
    #-----------------------------------

    """ 
    _get_or_create_basket method retrieves an active basket for the user or creates a new one if none exists. This ensures that each user has a single active basket for their service requests.
    """

    def _get_or_create_basket(self, user):
        basket, _ = Basket.objects.get_or_create(user_id=user, is_active=True)
        return basket


    #--------------------------------
    # :: Create Method
    #--------------------------------

    """ 
    Create method handles the creation of a service request. It validates the input data, retrieves or creates necessary related objects,
    """

    @transaction.atomic
    def create(self, validated_data):
        user = self.context['request'].user
        quantity = validated_data['quantity']
        latitude = validated_data['latitude']
        longitude = validated_data['longitude']
        service_type = validated_data['service_type']

        location = Point(longitude, latitude)
        address = self._get_address(latitude, longitude)
        user_profile = self._get_user_profile(user)
        basket = self._get_or_create_basket(user)

        if basket.requested_service != "null":
            raise serializers.ValidationError("Another service is already requested.")

        product = Product.objects.filter(service_type=service_type).first()
        if not product:
            raise serializers.ValidationError(f"No product available for service: {service_type}")

        basket_item, created = BasketItems.objects.get_or_create(
            basket=basket,
            product=product,
            defaults={
                "quantity": quantity,
                "user_id": user,
                "location": location,
                "latitude": latitude,
                "longitude": longitude,
                "price": product.price
            }
        )
        if not created:
            basket_item.quantity = quantity
            basket_item.save()

        basket.status = "Pool_Request"
        basket.service = service_type
        basket.requested_service = f"null_{service_type}"
        basket.latitude = latitude
        basket.longitude = longitude
        basket.location = location
        basket.address = address
        basket.customer_name = f"{user_profile.first_name} {user_profile.last_name}"
        basket.profile_image = user_profile.product_image
        basket.save()
        return basket_item



#--------------------------------
# :: Service Serializer Class
#--------------------------------

""" 
ServiceListSerializer is a serializer for the Product model that includes additional fields for average rating and total reviews.
"""

class ServiceListSerializer(serializers.ModelSerializer):
    average_rating = serializers.DecimalField(max_digits=2, decimal_places=1, read_only=True)
    total_reviews = serializers.IntegerField(source='total_reviews', read_only=True)


    #--------------------------------
    # :: Meta Model
    #--------------------------------

    """ 
    Meta class defines additional options for the ServiceListSerializer, such as the model it serializes and the fields to include 
    in the serialized output.
    """

    class Meta:
        model = Product
        fields = ['id', 'name', 'price', 'radius', 'service_type', 'product_image', 'average_rating', 'total_reviews']