import uuid
from django.urls import reverse
from services.models import Product
from .models import PayPalTransaction
from rest_framework.views import APIView
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import PayPalTransactionSerializer
from paypal.standard.forms import PayPalPaymentsForm
from rest_framework.permissions import AllowAny, IsAuthenticated



#-------------------------
# :: PayPal Form View
#-------------------------

""" 
paypal_form_view is an API view that handles the creation of a PayPal payment form. It accepts a POST request with 
service ID and item name,
"""

class PayPalFormView(APIView):
    permission_classes = [AllowAny]


    #-------------------------
    # :: Post Method
    #-------------------------

    """ 
    post method processes the incoming request to create a PayPal payment form. It retrieves the user, service ID, and item name 
    from the request data,
    """

    def post(self, request):
        user = request.user
        service_id = request.data.get('service_id')
        item_name = request.data.get('item_name')

        try:
            product = Product.objects.get(id=service_id)
        except Product.DoesNotExist:
            return Response({"error": "Service not found"}, status=status.HTTP_404_NOT_FOUND)

        transaction_id = str(uuid.uuid4())
        transaction_data = {
            'business': user.email,
            'amount': '20.00',
            'currency_code': 'USD',
            'item_name': item_name,
            'invoice': transaction_id,
            'notify_url': request.build_absolute_uri(reverse('paypal-ipn')),
            'return_url': request.build_absolute_uri(reverse('paypal-return')),
            'cancel_return': request.build_absolute_uri(reverse('paypal-cancel')),
            'lc': 'EN',
            'no_shipping': '1',
        }

        transaction = PayPalTransaction.objects.create(
            user=user,
            product=product,
            transaction_id=transaction_id,
            transaction_details=transaction_data
        )

        form = PayPalPaymentsForm(initial=transaction_data)
        return Response({
            "msg": "Payment form created successfully",
            "transaction": PayPalTransactionSerializer(transaction).data
        }, status=status.HTTP_201_CREATED)


# ------------------------------------
# :: PayPal Transaction List View
# ------------------------------------

""" 
paypal_transaction_view is a generic list API view that retrieves and returns a list of PayPal transactions for the authenticated user.
"""

class PayPalTransactionView(generics.ListAPIView):
    serializer_class = PayPalTransactionSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return PayPalTransaction.objects.filter(user=self.request.user)


#-------------------------
# :: PayPal IPN View
#-------------------------

""" 
paypal_ipn_view is an API view that handles PayPal Instant Payment Notifications (IPN). It processes the incoming IPN data, updates the corresponding PayPal transaction, and returns an appropriate response.
"""

@api_view(['POST'])
def paypal_ipn_view(request):
    txn_id = request.POST.get('txn_id')
    if txn_id:
        try:
            transaction = PayPalTransaction.objects.get(transaction_id=txn_id)
            transaction.payment_status = request.POST.get('payment_status')
            transaction.payment_amount = request.POST.get('mc_gross')
            transaction.save()
            return Response({'msg': 'IPN received'}, status=status.HTTP_200_OK)
        except PayPalTransaction.DoesNotExist:
            return Response({'error': 'Transaction not found'}, status=status.HTTP_400_BAD_REQUEST)
    return Response({'error': 'Invalid IPN request'}, status=status.HTTP_400_BAD_REQUEST)


#------------------------------------
# :: PayPal Return and Cancel Views
#------------------------------------

""" 
PayPal return and cancel views handle the redirection after a PayPal payment is completed or cancelled. They return a simple response indicating the outcome of the payment process.
"""

@api_view(['POST'])
def paypal_return_view(request):
    return Response({"msg": "Payment successful"}, status=status.HTTP_200_OK)



#------------------------------------
# :: PayPal Cancel View
#------------------------------------

""" 
paypal_cancel_view is an API view that handles the cancellation of a PayPal payment. It returns a response indicating that the payment has been cancelled.
"""

@api_view(['POST'])
def paypal_cancel_view(request):
    return Response({"msg": "Payment cancelled"}, status=status.HTTP_200_OK)
