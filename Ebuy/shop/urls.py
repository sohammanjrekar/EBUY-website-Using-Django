from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="ShopHome"),
    path("about/", views.about, name="AboutUs"),
    path("contact/", views.contact, name="ContactUs"),
    path("tracker/", views.tracker, name="TrackingStatus"),
    path("search/", views.search, name="Search"),
    path("products/<int:myid>/", views.productView, name="ProductView"),
    path("checkout/", views.checkout, name="Checkout"),
    path("track_activity/<str:activity_type>/<int:product_id>/", views.track_activity, name="TrackActivity"),
    path("recommended_products/", views.recommended_products, name="RecommendedProducts"),
]
