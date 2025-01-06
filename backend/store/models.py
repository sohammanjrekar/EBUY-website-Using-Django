from django.db import models
from django.contrib.auth.models import User

class Category(models.Model):
    name = models.CharField(max_length=255)
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.name

class Banner(models.Model):
    image = models.ImageField(upload_to='banners/')
    title = models.CharField(max_length=255)
    link = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.title

class Product(models.Model):
    category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    slug = models.SlugField(unique=True)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField()
    sizes = models.JSONField(default=list)  # Example: ["S", "M", "L", "XL"]
    image = models.ImageField(upload_to='products/')
    carousel_images = models.JSONField(default=list)  # List of image URLs
    offer_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)

    def __str__(self):
        return self.name

class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()

    def __str__(self):
        return f'{self.user.username} - {self.product.name}'

class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    products = models.ManyToManyField(Cart)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=50, choices=[('Pending', 'Pending'), ('Completed', 'Completed')])
    created_at = models.DateTimeField(auto_now_add=True)
    razorpay_order_id = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return f'Order {self.id} by {self.user.username}'

