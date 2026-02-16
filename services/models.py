from django.db import models
from django.conf import settings
from django.db.models import Avg
from django.core.validators import MinValueValidator, MaxValueValidator

class Review(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='product_reviews')
    product = models.ForeignKey('Product', on_delete=models.CASCADE, related_name='reviews')
    rating = models.DecimalField(max_digits=2, decimal_places=1, validators=[MinValueValidator(1), MaxValueValidator(5)])
    comment = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('user', 'product')
        ordering = ['-created_at']
        indexes = [models.Index(fields=['product', 'user'])]

    def __str__(self):
        return f"{self.product.name} - {self.rating}⭐"

class Product(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='products')
    name = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=8, decimal_places=2, validators=[MinValueValidator(0)])
    radius = models.DecimalField(max_digits=6, decimal_places=2, validators=[MinValueValidator(0)])
    service_type = models.CharField(max_length=100)
    product_image = models.ImageField(upload_to='products/', default='products/default_product.png')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
        indexes = [models.Index(fields=['user']), models.Index(fields=['service_type'])]

    @property
    def average_rating(self):
        return self.reviews.aggregate(avg=Avg('rating'))['avg'] or 0

    @property
    def total_reviews(self):
        return self.reviews.count()

    def __str__(self):
        return self.name

class UserInformation(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    product_image = models.ImageField(upload_to='users/', default='avatar.png')
