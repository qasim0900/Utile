from django.dispatch import receiver
from django.db.models.signals import post_save
from .models import APIUser, CustomerProfile, ServiceProfile, AccountVerification


# ------------------------------------
# :: Create User profiles Method
# ------------------------------------

""" 
Create user profiles and account verification instances automatically when a new APIUser is created, and save the profiles
and verification instances when the APIUser is saved.
"""
@receiver(post_save, sender=APIUser)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        if instance.is_customer:
            CustomerProfile.objects.create(user=instance)
        elif instance.is_service_provider:
            ServiceProfile.objects.create(user=instance)
        AccountVerification.objects.create(user=instance)



# ------------------------------------
# :: Save User Profile Method
# ------------------------------------

""" 
Save the user profiles and account verification instances when the APIUser is saved, to ensure that any changes to the user
"""

@receiver(post_save, sender=APIUser)
def save_user_profile(sender, instance, **kwargs):
    if instance.is_customer and hasattr(instance, 'customer_profile'):
        instance.customer_profile.save()
    elif instance.is_service_provider and hasattr(instance, 'service_profile'):
        instance.service_profile.save()
    if hasattr(instance, 'verification'):
        instance.verification.save()