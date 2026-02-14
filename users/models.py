from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _

#---------------------------
# :: API User Model
#---------------------------

""" 
Custom user model with different user types: Customer and Service Provider. 
"""

class APIUser(AbstractUser):
    
    #---------------------------
    # :: User Type Model
    #---------------------------

    """ 
    User type field to distinguish between customers and service providers.
    """
    
    class UserType(models.TextChoices):
        CUSTOMER = 'customer', _('Customer')
        SERVICE = 'service', _('Service Provider')

    type = models.CharField(
        max_length=20,
        choices=UserType.choices,
        default=UserType.CUSTOMER,
        verbose_name=_("User Type")
    )



    #---------------------------
    # :: Is Customer Method
    #---------------------------

    """ 
    is_customer method to check if the user is a customer.
    """
    
    @property
    def is_customer(self):
        return self.type == self.UserType.CUSTOMER


    #---------------------------------
    # :: Is Service Provider Method
    #---------------------------------

    """ 
    is_service method to check if the user is a service provider.
    """

    def is_service_provider(self):
        return self.type == self.UserType.SERVICE

    #---------------------------------
    # :: Meta Class
    #---------------------------------

    """ 
    Meta class to define verbose names for the user model.
    """
    
    class Meta:
        verbose_name = _("User")
        verbose_name_plural = _("Users")

#---------------------------
# :: Customer Profile Model
#---------------------------

""" 
CustomerProfile model to store additional information for customers, such as address, 
city, country, zipcode, telephone, company, and profile image.    
"""

class CustomerProfile(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='customer_profile'
    )
    address = models.CharField(max_length=255, blank=True)
    city = models.CharField(max_length=100, blank=True)
    country = models.CharField(max_length=100, blank=True)
    zipcode = models.CharField(max_length=20, blank=True)
    telephone = models.CharField(max_length=20, blank=True)
    company = models.CharField(max_length=100, blank=True)
    profile_image = models.ImageField(
        upload_to='users/', default='avatar.png', blank=True
    )


    #---------------------------------
    # :: __str__ Method
    #---------------------------------

    """ 
    __str__ method to return the username of the user.
    """
    
    def __str__(self):
        return f"{self.user.username} Profile"

    #---------------------------------
    # :: Meta Class
    #---------------------------------

    """ 
    Meta class to define verbose names for the user model.
    """
    
    class Meta:
        verbose_name = _("Customer Profile")
        verbose_name_plural = _("Customer Profiles")
        
        
#---------------------------
# :: Service Profile Model
#---------------------------

""" 
ServiceProfile model to store additional information for service providers, such as company name,    
"""

class ServiceProfile(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='service_profile'
    )
    company_name = models.CharField(max_length=100, blank=True)
    description = models.TextField(blank=True)
    profile_image = models.ImageField(
        upload_to='services/', default='service_avatar.png', blank=True
    )


    #---------------------------------
    # :: __str__ Method
    #---------------------------------

    """ 
    __str__ method to return the username of the user.
    """

    def __str__(self):
        return f"{self.user.username} Service Profile"


    #---------------------------------
    # :: Meta Class
    #---------------------------------

    """ 
    Meta class to define verbose names for the user model.
    """

    class Meta:
        verbose_name = _("Service Profile")
        verbose_name_plural = _("Service Profiles")
        
#---------------------------------
# :: Account Verification Model
#---------------------------------

""" 
AccountVerification model to store verification status for users, including profile verification, 
"""

class AccountVerification(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='verification'
    )
    profile_verified = models.BooleanField(default=False)
    credit_card_verified = models.BooleanField(default=False)
    pro_status = models.BooleanField(default=False)


    #---------------------------------
    # :: is_verified Method
    #---------------------------------

    """ 
    is_verified method to check if the user is verified.
    """

    @property
    def is_verified(self):
        return self.profile_verified and self.credit_card_verified


    #---------------------------------
    # :: __str__ Method
    #---------------------------------

    """ 
    __str__ method to return the username of the user.
    """

    def __str__(self):
        return f"Verification - {self.user.username}"

    #---------------------------------
    # :: Meta Class
    #---------------------------------

    """ 
    Meta class to define verbose names for the user model.
    """
    
    class Meta:
        verbose_name = _("Account Verification")
        verbose_name_plural = _("Account Verifications")
        

