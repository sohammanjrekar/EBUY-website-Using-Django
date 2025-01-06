from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product, Category, Banner

@api_view(['GET'])
def index_page(request):
    categories = Category.objects.all().values()
    banners = Banner.objects.all().values()
    products = Product.objects.all().values()
    return Response({"categories": categories, "banners": banners, "products": products})

@api_view(['GET'])
def product_detail(request, slug):
    try:
        product = Product.objects.get(slug=slug)
        return Response({
            "name": product.name,
            "description": product.description,
            "price": product.price,
            "sizes": product.sizes,
            "images": product.carousel_images,
        })
    except Product.DoesNotExist:
        return Response({"error": "Product not found"}, status=404)


from rest_framework.permissions import IsAuthenticated
from .models import Cart, Order
import razorpay

razorpay_client = razorpay.Client(auth=("your_api_key", "your_api_secret"))

@api_view(['POST'])
def add_to_cart(request):
    user = request.user
    product_id = request.data.get('product_id')
    quantity = request.data.get('quantity', 1)
    cart, _ = Cart.objects.get_or_create(user=user, product_id=product_id, defaults={"quantity": quantity})
    return Response({"message": "Added to cart"})

@api_view(['POST'])
def checkout(request):
    user = request.user
    cart_items = Cart.objects.filter(user=user)
    total_amount = sum(item.product.price * item.quantity for item in cart_items)
    order = Order.objects.create(user=user, total_amount=total_amount)

    # Create Razorpay Order
    razorpay_order = razorpay_client.order.create({
        "amount": total_amount * 100,
        "currency": "INR",
        "payment_capture": "1",
    })
    order.razorpay_order_id = razorpay_order["id"]
    order.save()

    return Response({"order_id": order.razorpay_order_id, "total_amount": total_amount})

@api_view(['GET'])
def product_detail(request, slug):
    product = Product.objects.get(slug=slug)
    return Response({
        "name": product.name,
        "carousel_images": product.carousel_images,
    })
