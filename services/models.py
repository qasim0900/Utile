from django.db import models
from django.conf import settings
from django.db.models import Avg
from django.core.validators import MinValueValidator, MaxValueValidator

#--------------------------------
# :: Review Model
#--------------------------------

""" 
Review model represents user feedback for a product. Each review is linked to a specific user and product, 
and includes a rating and an optional comment. The model enforces that a user can only review a product once, and it provides 
properties to calculate the average rating and total number of reviews for a product.
"""

class Review(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='product_reviews'
    )
    product = models.ForeignKey(
        'Product',
        on_delete=models.CASCADE,
        related_name='reviews'
    )
    rating = models.DecimalField(
        max_digits=2,
        decimal_places=1,
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    comment = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)


    #--------------------------------
    # :: Meta Model
    #--------------------------------

    """ 
    Meta class defines additional options for the Review model, such as unique constraints, default ordering, and database indexes.
    """

    class Meta:
        unique_together = ('user', 'product')
        ordering = ['-created_at']
        indexes = [models.Index(fields=['product', 'user'])]

    #--------------------------------
    # :: __str__ Model
    #--------------------------------

    """ 
    __str__ method provides a human-readable representation of the Review instance, showing the product name and the rating.
    """

    def __str__(self):
        return f"{self.product.name} - {self.rating}⭐"




#--------------------------------
# :: Product Model
#--------------------------------

""" 
Product model represents a service or item offered by a user. Each product is associated with a user and includes details
such as name, price, radius, service type, and an optional image. The model also provides properties to calculate the average 
rating and total number of reviews for the product.
"""

class Product(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='products'
    )
    name = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=8, decimal_places=2, validators=[MinValueValidator(0)])
    radius = models.DecimalField(max_digits=6, decimal_places=2, validators=[MinValueValidator(0)])
    service_type = models.CharField(max_length=100)
    product_image = models.ImageField(upload_to='products/', default='products/default_product.png')
    created_at = models.DateTimeField(auto_now_add=True)


    #--------------------------------
    # :: Meta Model
    #--------------------------------

    """ 
    Meta class defines additional options for the Product model, such as default ordering and database indexes to optimize 
    queries based on user and service type.
    """

    class Meta:
        ordering = ['-created_at']
        indexes = [models.Index(fields=['user']), models.Index(fields=['service_type'])]

    #--------------------------------
    # :: average_rating Method
    #--------------------------------

    """ 
    average_rating property calculates the average rating for the product based on its related reviews. It uses Django's aggregation
    """

    @property
    def average_rating(self):
        return self.reviews.aggregate(avg=Avg('rating'))['avg'] or 0


    #--------------------------------
    # :: total_reviews Method
    #--------------------------------

    """ 
    Total_reviews property returns the total number of reviews for the product by counting the related reviews. 
    This provides a quick way to see how many users have reviewed the product.
    """

    @property
    def total_reviews(self):
        return self.reviews.count()


    #--------------------------------
    # :: __str__ Method
    #--------------------------------

    """ 
    __str__ method provides a human-readable representation of the Product instance, showing the product name.
    """

    def __str__(self):
        return self.name
