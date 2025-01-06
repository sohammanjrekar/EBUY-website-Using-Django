from django.contrib import admin
from .models import Category, Product, Banner, Cart, Order

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('name',)}

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('name',)}
    list_display = ('name', 'price', 'stock', 'category')

@admin.register(Banner)
class BannerAdmin(admin.ModelAdmin):
    list_display = ('title',)

admin.site.register(Cart)
admin.site.register(Order)
