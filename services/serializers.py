from django.conf import settings
from django.db import transaction
from rest_framework import serializers
from .models import Product, UserInformation
from orders.models import Basket, BasketItem

class ServiceRequestSerializer(serializers.ModelSerializer):
    quantity = serializers.IntegerField(min_value=1)
    latitude = serializers.FloatField()
    longitude = serializers.FloatField()
    service_type = serializers.CharField(write_only=True)

    class Meta:
        model = BasketItem
        fields = ['quantity', 'latitude', 'longitude', 'service_type']

    def _get_user_profile(self, user):
        return UserInformation.objects.get(user_id=user.id)

    def _get_or_create_basket(self, user):
        basket, _ = Basket.objects.get_or_create(user_id=user, is_active=True)
        return basket

    @transaction.atomic
    def create(self, validated_data):
        user = self.context['request'].user
        quantity = validated_data['quantity']
        latitude = validated_data['latitude']
        longitude = validated_data['longitude']
        service_type = validated_data['service_type']

        user_profile = self._get_user_profile(user)
        basket = self._get_or_create_basket(user)

        product = Product.objects.filter(service_type=service_type).first()
        if not product:
            raise serializers.ValidationError(f"No product available for service: {service_type}")

        basket_item, created = BasketItem.objects.get_or_create(
            basket=basket,
            product=product,
            user=user,
            defaults={
                "quantity": quantity,
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
        basket.latitude = latitude
        basket.longitude = longitude
        basket.customer_name = f"{user_profile.first_name} {user_profile.last_name}"
        basket.profile_image = user_profile.product_image
        basket.save()
        return basket_item

class ServiceListSerializer(serializers.ModelSerializer):
    average_rating = serializers.DecimalField(max_digits=2, decimal_places=1, read_only=True)
    total_reviews = serializers.IntegerField(source='total_reviews', read_only=True)

    class Meta:
        model = Product
        fields = ['id', 'name', 'price', 'radius', 'service_type', 'product_image', 'average_rating', 'total_reviews']
