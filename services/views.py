from django.db.models import Avg
from .models import Product
from orders.models import BasketItem
from rest_framework import viewsets, generics
from rest_framework.permissions import IsAuthenticated
from .serializers import ServiceRequestSerializer, ServiceListSerializer

class ServiceViewSet(viewsets.ModelViewSet):
    serializer_class = ServiceListSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        service_type = self.kwargs.get('service_type')
        return Product.objects.filter(service_type=service_type).annotate(avg_rating=Avg('reviews__rating')).order_by('-avg_rating')

class AddServiceJobAPIView(generics.CreateAPIView):
    serializer_class = ServiceRequestSerializer
    permission_classes = [IsAuthenticated]
    queryset = BasketItem.objects.all()
