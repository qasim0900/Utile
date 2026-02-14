from django.db import transaction
from django.shortcuts import get_object_or_404

from rest_framework import status, generics, mixins, viewsets
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import APIUser, CustomerProfile, ServiceProfile, AccountVerification
from .serializers import (
    UserRegistrationSerializer,
    CustomerProfileSerializer,
    ServiceProfileSerializer,
    AccountVerificationSerializer,
    ChangePasswordSerializer,
)


class BaseUserOwnedViewSet(
    mixins.RetrieveModelMixin,
    mixins.UpdateModelMixin,
    viewsets.GenericViewSet
):
    """
    Base ViewSet for models that have OneToOne relation with User
    and should be accessible only by the owner.
    """
    permission_classes = [IsAuthenticated]
    model = None

    def get_object(self):
        return get_object_or_404(self.model, user=self.request.user)



class UserViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Returns authenticated user's own data only.
    """
    serializer_class = UserRegistrationSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return APIUser.objects.filter(id=self.request.user.id)



class CustomerUserViewSet(BaseUserOwnedViewSet):
    """
    Retrieve & Update Customer profile of authenticated user.
    """
    serializer_class = CustomerProfileSerializer
    model = CustomerProfile


class ServicesUserViewSet(BaseUserOwnedViewSet):
    """
    Retrieve & Update Service provider profile of authenticated user.
    """
    serializer_class = ServiceProfileSerializer
    model = ServiceProfile


class AccountVerificationViewSet(BaseUserOwnedViewSet):
    """
    Retrieve & Update account verification status.
    """
    serializer_class = AccountVerificationSerializer
    model = AccountVerification


class UserRegistrationAPIView(generics.CreateAPIView):
    """
    Register a new user (Customer or Service Provider).
    """
    serializer_class = UserRegistrationSerializer
    permission_classes = [AllowAny]

    @transaction.atomic
    def perform_create(self, serializer):
        serializer.save()


class ChangeUserPasswordAPIView(APIView):
    """
    Change password for authenticated user.
    """
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = ChangePasswordSerializer(
            data=request.data,
            context={"request": request}
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(
            {"detail": "Password updated successfully"},
            status=status.HTTP_200_OK
        )


class SetupAccountPart1APIView(APIView):
    """
    Update profile information based on user type.
    """
    permission_classes = [IsAuthenticated]

    def patch(self, request):
        user = request.user

        if user.is_customer and hasattr(user, "customer_profile"):
            serializer_class = CustomerProfileSerializer
            instance = user.customer_profile

        elif user.is_service_provider and hasattr(user, "service_profile"):
            serializer_class = ServiceProfileSerializer
            instance = user.service_profile

        else:
            return Response(
                {"detail": "Invalid user type"},
                status=status.HTTP_400_BAD_REQUEST
            )

        serializer = serializer_class(
            instance,
            data=request.data,
            partial=True
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(
            {"detail": "Profile updated successfully"},
            status=status.HTTP_200_OK
        )


class SetupAccountPart2APIView(APIView):
    """
    Update account verification details.
    """
    permission_classes = [IsAuthenticated]

    def patch(self, request):
        verification = request.user.verification

        serializer = AccountVerificationSerializer(
            verification,
            data=request.data,
            partial=True
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(
            {
                "detail": "Account setup completed",
                "is_verified": verification.is_verified,
            },
            status=status.HTTP_200_OK
        )

