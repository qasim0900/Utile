from rest_framework import viewsets, generics
from .models import Basket, BasketItem, Order
from rest_framework.permissions import IsAuthenticated
from .serializers import BasketItemSerializer, BasketSerializer, OrderSerializer


# -------------------------------
# :: BasketItem ViewSet Class
# -------------------------------

""" 
BasketItem ViewSet to handle CRUD operations for BasketItem model.
"""


class BasketItemViewSet(viewsets.ModelViewSet):
    serializer_class = BasketItemSerializer
    permission_classes = [IsAuthenticated]

    # -------------------------------
    # :: get_queryset method
    # -------------------------------

    """ 
    BasketItem ViewSet get_queryset method to filter queryset based on user permissions.
    """

    def get_queryset(self):
        qs = BasketItem.objects.select_related('product', 'user', 'basket')
        return qs if self.request.user.is_superuser else qs.filter(user=self.request.user)


# -------------------------------
# :: AddBasketItem APIView Class
# -------------------------------
""" 
AddBasketItem APIView to handle adding items to a basket.
"""


class AddBasketItemAPIView(generics.CreateAPIView):
    serializer_class = BasketItemSerializer
    permission_classes = [IsAuthenticated]

    # -------------------------------
    # :: get_queryset Method
    # -------------------------------

    """ 
    get_queryset method for AddBasketItemAPIView to filter queryset based on user permissions.
    """

    def get_queryset(self):
        return BasketItem.objects.all()


# ------------------------------------
# :: RemoveBasketItemAPIView Class
# ------------------------------------
""" 
RemoveBasketItemAPIView to handle removing items from a basket.
"""


class RemoveBasketItemAPIView(generics.DestroyAPIView):
    serializer_class = BasketItemSerializer
    permission_classes = [IsAuthenticated]

    # -------------------------------
    # :: get_queryset Method
    # -------------------------------

    """ 
    get_queryset method for RemoveBasketItemAPIView to filter queryset based on user permissions.
    """

    def get_queryset(self):
        return BasketItem.objects.all()


# -------------------------------
# :: BasketViewSet Class
# -------------------------------

""" 
BasketViewSet to handle CRUD operations for Basket model.
"""


class BasketViewSet(viewsets.ModelViewSet):
    serializer_class = BasketSerializer
    permission_classes = [IsAuthenticated]

    # -------------------------------
    # :: get_queryset Method
    # -------------------------------

    """ 
    get_queryset method for BasketViewSet to filter queryset based on user permissions. 
    """

    def get_queryset(self):
        qs = Basket.objects.prefetch_related(
            'items__product').select_related('user')
        return qs if self.request.user.is_superuser else qs.filter(user=self.request.user, is_active=True)


# -------------------------------
# :: Order ViewSet Class
# -------------------------------

""" 
OrderViewSet
"""


class OrderViewSet(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    # -------------------------------
    # :: Order Serializer Class
    # -------------------------------

    """ 
    Order Serializer to serialize Order model data.
    """

    def get_queryset(self):
        qs = Order.objects.select_related(
            'user', 'requested_client', 'basket__user')
        return qs if self.request.user.is_superuser else qs.filter(user=self.request.user)


# -------------------------------
# :: Order Serializer Class
# -------------------------------
""" 
Order Serializer to serialize Order model data.
"""


class OrderHistoryViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    # -------------------------------
    # :: Order Serializer Class
    # -------------------------------

    """ 
    Order Serializer to serialize Order model data.
    """

    def get_queryset(self):
        qs = Order.objects.select_related('user', 'basket', 'requested_client')
        return qs if self.request.user.is_superuser else qs.filter(requested_client=self.request.user).order_by('-date_ordered')
