from django.urls import path
from .views import (
    PayPalFormView,
    PayPalTransactionView,
    paypal_ipn_view,
    paypal_return_view,
    paypal_cancel_view
)


#-------------------------
# :: URL Patterns
#-------------------------

""" 
defines the URL patterns for the payments app. It includes paths for the PayPal form view, PayPal transaction list view,
PayPal IPN view, and PayPal return and cancel views.
"""

urlpatterns = [
    path('paypal-form/', PayPalFormView.as_view(), name='paypal-form'),
    path('paypal-transactions/', PayPalTransactionView.as_view(), name='paypal-transactions'),
    path('paypal-ipn/', paypal_ipn_view, name='paypal-ipn'),
    path('paypal-return/', paypal_return_view, name='paypal-return'),
    path('paypal-cancel/', paypal_cancel_view, name='paypal-cancel'),
]
