from rest_framework import serializers
from __future__ import unicode_literals
from .models import CustomerProfile, ServiceProfile, AccountVerification,APIUser

# -----------------------------------
# :: Customer Profile Serializer
# -----------------------------------

""" 
CustomerProfileSerializer to handle the serialization of customer profiles, including address, city, country, zipcode, 
telephone, company, and profile image. It also includes an update method to allow for updating the customer profile information.
"""

class CustomerProfileSerializer(serializers.ModelSerializer):
    
    #--------------------------
    # :: Meta Class
    #--------------------------
    
    """
    Meta class to define the model and fields for the customer profile serializer, as well as any read-only fields.
    """
    
    class Meta:
        model = CustomerProfile
        fields = ['address', 'city', 'country', 'zipcode', 'telephone', 'company', 'profile_image']
        read_only_fields = []


    #--------------------------
    # :: Update Method
    #--------------------------
    
    """
    update method to allow for updating the customer profile information by iterating through the validated data and setting
    """
    
    def update(self, instance, validated_data):
        for attr, value in validated_data.iteritems():
            setattr(instance, attr, value)
        instance.save()
        return instance


# -------------------------------
# :: Service Profile Serializer
# -------------------------------

""" 
ServiceProfileSerializer to handle the serialization of service provider profiles, including company name, description, 
and profile image. It also includes an update method to allow for updating the service profile information.
"""

class ServiceProfileSerializer(serializers.ModelSerializer):
    
    #--------------------------
    # :: Meta Class
    #--------------------------
    
    """
    Meta class to define the model and fields for the service profile serializer, as well as any read-only fields.
    """
    
    class Meta:
        model = ServiceProfile
        fields = ['company_name', 'description', 'profile_image']
        read_only_fields = []


    #--------------------------
    # :: Update Method
    #--------------------------
    
    """
    update method to allow for updating the service profile information by iterating through the validated data and setting
    """
    
    def update(self, instance, validated_data):
        for attr, value in validated_data.iteritems():
            setattr(instance, attr, value)
        instance.save()
        return instance


# ------------------------------------
# :: Account Verification Serializer
# ------------------------------------

""" 
account verification serializer to handle the verification status of user accounts, including profile 
verification, credit card verification, and pro status. It also includes a method to determine if the account 
is fully verified based on the individual verification fields.
"""

class AccountVerificationSerializer(serializers.ModelSerializer):
    is_verified = serializers.SerializerMethodField(read_only=True)

    #--------------------------
    # :: Meta Class
    #--------------------------
    
    """
    Meta class to define the model and fields for the account verification serializer, as well as any read-only fields.
    """
    
    class Meta:
        model = AccountVerification
        fields = ['profile_verified', 'credit_card_verified', 'pro_status', 'is_verified']
        read_only_fields = ['is_verified']


    #--------------------------
    # :: Meta Class
    #--------------------------
    
    """
    Meta class to define the model and fields for the account verification serializer, as well as any read-only fields.
    """

    def get_is_verified(self, obj):
        return obj.is_verified


    #--------------------------
    # :: Update Method
    #--------------------------
    
    """
    update method to allow for updating the account verification information by iterating through the validated data and setting
    """
    
    def update(self, instance, validated_data):
        for attr, value in validated_data.iteritems():
            setattr(instance, attr, value)
        instance.save()
        return instance


# -----------------------------------
# :: User Registration Serializer
# -----------------------------------

""" 
user registration serializer to handle user registration, including password validation and profile creation based on user type.
"""

class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=8)
    customer_profile = CustomerProfileSerializer(read_only=True)
    service_profile = ServiceProfileSerializer(read_only=True)
    verification = AccountVerificationSerializer(read_only=True)


    #--------------------------
    # :: Meta Class
    #--------------------------
    
    """
    Meta class to define the model and fields for the user registration serializer, as well as any read-only fields.
    """

    class Meta:
        model = APIUser
        fields = ['id', 'username', 'email', 'password', 'type', 'customer_profile', 'service_profile', 'verification']


    #--------------------------
    # :: Validate Email Method
    #--------------------------
    
    """
    validate_email method to ensure that the email provided during registration is unique and not already in use by another user.
    """

    def validate_email(self, value):
        if APIUser.objects.filter(email=value).exists():
            raise serializers.ValidationError("Email is already in use.")
        return value


    #--------------------------
    # :: Create Method
    #--------------------------
    
    """
    Create method to handle the creation of a new user, including setting the password and creating 
    the appropriate profile based on the user type.
    """
    
    def create(self, validated_data):
        password = validated_data.pop('password')
        user_type = validated_data.pop('type', APIUser.UserType.CUSTOMER)
        user = APIUser.objects.create(**validated_data)
        user.type = user_type
        user.set_password(password)
        user.save()
        return user


# -------------------------------
# :: Change Password Serializer
# -------------------------------

"""
ChangePasswordSerializer to handle password change requests, ensuring that the old password is correct and the new passwords match.
"""

class ChangePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(write_only=True, required=True)
    new_password = serializers.CharField(write_only=True, required=True, min_length=8)
    confirm_password = serializers.CharField(write_only=True, required=True, min_length=8)


    #--------------------------
    # :: Validate Method
    #--------------------------
    
    """
    Validate method to ensure that the new password and confirm password fields match.
    """

    def validate(self, data):
        if data['new_password'] != data['confirm_password']:
            raise serializers.ValidationError({"new_password": "New passwords must match."})
        return data


    #--------------------------
    # :: Save Method
    #--------------------------
    
    """
    Save method to handle the saving of the updated user password. It checks that the old password is 
    correct before setting the new password and saving the user.
    """
    
    def save(self, **kwargs):
        user = self.context['request'].user
        if not user.check_password(self.validated_data['old_password']):
            raise serializers.ValidationError({"old_password": "Old password is incorrect."})
        user.set_password(self.validated_data['new_password'])
        user.save()
        return user
