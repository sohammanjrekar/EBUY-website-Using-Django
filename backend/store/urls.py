from django.urls import path
from . import views

urlpatterns = [
    path('api/index/', views.index_page, name='index'),
    path('api/product/<slug:slug>/', views.product_detail, name='product_detail'),
    path('api/cart/add/', views.add_to_cart, name='add_to_cart'),
    path('api/checkout/', views.checkout, name='checkout'),
]
