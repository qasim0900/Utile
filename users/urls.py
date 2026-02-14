from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import (
    UserViewSet,
    CustomerUserViewSet,
    ServicesUserViewSet,
    AccountVerificationViewSet,
    UserRegistrationAPIView,
    ChangeUserPasswordAPIView,
    SetupAccountPart1APIView,
    SetupAccountPart2APIView,
)


# -----------------------------------
# :: DRF Router for User ViewSets
# -----------------------------------

""" 
DrF router to automatically generate URL patterns for UserViewSet, CustomerUserViewSet, ServicesUserViewSet, and AccountVerificationViewSet.
This allows for easy CRUD operations on user-related endpoints without manually defining each URL.
"""

router = DefaultRouter()
router.register(r'users', UserViewSet, basename='user')
router.register(r'profile/customer', CustomerUserViewSet, basename='customer-profile')
router.register(r'profile/service', ServicesUserViewSet, basename='service-profile')
router.register(r'account/verification', AccountVerificationViewSet, basename='account-verification')

# ---------------------------
# :: URL Patterns
# ---------------------------

""" 
Urls for user authentication, registration, password management, account setup, and user-related API endpoints.
Includes JWT token endpoints and DRF router URLs for user viewsets.
"""

urlpatterns = [

    # -------- AUTH --------
    path('auth/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('auth/register/', UserRegistrationAPIView.as_view(), name='user-register'),
    path(
        'auth/password/change/',
        ChangeUserPasswordAPIView.as_view(),
        name='change-password'
    ),

    # -------- ACCOUNT SETUP --------
    path(
        'account/setup/profile/',
        SetupAccountPart1APIView.as_view(),
        name='account-setup-profile'
    ),
    path(
        'account/setup/verification/',
        SetupAccountPart2APIView.as_view(),
        name='account-setup-verification'
    ),

    # -------- API RESOURCES --------
    path('api/', include(router.urls)),
]