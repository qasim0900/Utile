from django.urls import path
from .views import ServiceViewSet, AddServiceJobAPIView

#-------------------------
# :: Url Pattren
#-------------------------

""" 
Urls for services app
"""

urlpatterns = [
    path('services/<str:service_type>/', ServiceViewSet.as_view({'get': 'list'}), name='service-list'),
    path('request-service/', AddServiceJobAPIView.as_view(), name='request-service'),
]
