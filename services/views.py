from django.db.models import Avg
from .models import Product, BasketItems
from rest_framework import viewsets, generics
from rest_framework.permissions import IsAuthenticated
from .serializers import ServiceRequestSerializer, ServiceListSerializer

#--------------------------------
# :: Service ViewSet Class
#--------------------------------

""" 
ServiceViewSet is a viewset for listing services based on their type. It allows authenticated users to retrieve a list of 
products filtered by service type, and it annotates each product with its average rating for sorting purposes.
"""

class ServiceViewSet(viewsets.ModelViewSet):
    serializer_class = ServiceListSerializer
    permission_classes = [IsAuthenticated]


    #--------------------------------
    # :: get_queryset Method
    #--------------------------------

    """ 
    get_queryset method retrieves a queryset of Product instances filtered by the service type specified in the URL. 
    It also annotates each product with its average rating calculated from related reviews and orders the results by average rating 
    in descending order.
    """

    def get_queryset(self):
        service_type = self.kwargs.get('service_type')
        return Product.objects.filter(service_type=service_type).annotate(avg_rating=Avg('reviews__rating')).order_by('-avg_rating')


#-----------------------------------
# :: Add Service Job APIView Class
#-----------------------------------

""" 
AddServiceJobAPIView is an API view for handling service requests. It allows authenticated users to create a 
new service request by providing
"""

class AddServiceJobAPIView(generics.CreateAPIView):
    serializer_class = ServiceRequestSerializer
    permission_classes = [IsAuthenticated]
    queryset = BasketItems.objects.all()
