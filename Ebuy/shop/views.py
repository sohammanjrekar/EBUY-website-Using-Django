from django.shortcuts import render

from shop.recomadation import collaborative_filtering_recommendation, content_based_recommendation
from .models import Product, Contact, Orders, OrderUpdate, UserActivity
from math import ceil
import json

# Create your views here.
from django.http import HttpResponse
MERCHANT_KEY = 'Your-Merchant-Key-Here'
from django.db.models import Count

from collections import defaultdict
from django.db.models import Count

def index(request):
    allDepartments = []
    allCategories = {}
    allSubcategories = {}
    allProds = []

    # Fetch distinct departments
    departments = Product.objects.values_list('department', flat=True).distinct()

    for department in departments:
        allDepartments.append(department)

        # Fetch distinct categories for the department
        categories = Product.objects.filter(department=department).values_list('category', flat=True).distinct()

        # Fetch distinct subcategories for each category in the department
        subcategories_dict = {}
        for category in categories:
            subcategories = Product.objects.filter(department=department, category=category).values_list('sub_category', flat=True).distinct()
            subcategories_dict[category] = list(subcategories)
        allSubcategories[department] = subcategories_dict

        # Fetch products for each department and category
        for category in categories:
            products = Product.objects.filter(department=department, category=category)
            nSlides = len(products) // 4 + ceil((len(products) / 4) - (len(products) // 4))
            ranges = range(1, nSlides)
            allProds.append((department, category, products, ranges, nSlides))

    params = {
        'allDepartments': allDepartments,
        'allCategories': allCategories,
        'allSubcategories': allSubcategories,
        'allProds': allProds,
    }
    return render(request, 'shop/index.html', params)






def searchMatch(query, item):
    '''return true only if query matches the item'''
    if query in item.description.lower() or query in item.product_name.lower() or query in item.sub_category.lower():
        return True
    else:
        return False

def search(request):
    query = request.GET.get('search')
    allProds = []
    catprods = Product.objects.values('category', 'id')
    cats = {item['category'] for item in catprods}
    for cat in cats:
        prodtemp = Product.objects.filter(category=cat)
        prod = [item for item in prodtemp if searchMatch(query, item)]

        n = len(prod)
        nSlides = n // 4 + ceil((n / 4) - (n // 4))
        if len(prod) != 0:
            allProds.append([prod, range(1, nSlides), nSlides])
    params = {'allProds': allProds, "msg": ""}
    if len(allProds) == 0 or len(query)<4:
        params = {'msg': "Please make sure to enter relevant search query"}
    return render(request, 'shop/search.html', params)


def about(request):
    return render(request, 'shop/about.html')


def contact(request):
    thank = False
    if request.method=="POST":
        name = request.POST.get('name', '')
        email = request.POST.get('email', '')
        phone = request.POST.get('phone', '')
        desc = request.POST.get('desc', '')
        contact = Contact(name=name, email=email, phone=phone, desc=desc)
        contact.save()
        thank = True
    return render(request, 'shop/contact.html', {'thank': thank})


def tracker(request):
    if request.method=="POST":
        orderId = request.POST.get('orderId', '')
        email = request.POST.get('email', '')
        try:
            order = Orders.objects.filter(order_id=orderId, email=email)
            if len(order)>0:
                update = OrderUpdate.objects.filter(order_id=orderId)
                updates = []
                for item in update:
                    updates.append({'text': item.update_desc, 'time': item.timestamp})
                    response = json.dumps({"status":"success", "updates": updates, "itemsJson": order[0].items_json}, default=str)
                return HttpResponse(response)
            else:
                return HttpResponse('{"status":"noitem"}')
        except Exception as e:
            return HttpResponse('{"status":"error"}')

    return render(request, 'shop/tracker.html')


def productView(request, myid):

    # Fetch the product using the id
    product = Product.objects.filter(id=myid)
    return render(request, 'shop/prodView.html', {'product':product[0]})


def checkout(request):
    if request.method=="POST":
        items_json = request.POST.get('itemsJson', '')
        name = request.POST.get('name', '')
        amount = request.POST.get('amount', '')
        email = request.POST.get('email', '')
        address = request.POST.get('address1', '') + " " + request.POST.get('address2', '')
        city = request.POST.get('city', '')
        state = request.POST.get('state', '')
        zip_code = request.POST.get('zip_code', '')
        phone = request.POST.get('phone', '')
        order = Orders(items_json=items_json, name=name, email=email, address=address, city=city,state=state, zip_code=zip_code, phone=phone, amount=amount)
        order.save()
        update = OrderUpdate(order_id=order.order_id, update_desc="The order has been placed")
        update.save()
        thank = True
        id = order.order_id
        return render(request, 'shop/checkout.html', {'thank':thank, 'id': id})
        

    return render(request, 'shop/checkout.html')


def recommended_products(request):
    user = request.user
    
    # Get recommendations using content-based approach
    content_based_recommendations = content_based_recommendation(user)
    
    # Get recommendations using collaborative filtering approach
    collaborative_filtering_recommendations = collaborative_filtering_recommendation(user)
    
    return render(request, 'shop/recommended_products.html', {'content_based_recommendations': content_based_recommendations, 'collaborative_filtering_recommendations': collaborative_filtering_recommendations})
from django.contrib.auth.decorators import login_required

@login_required
def track_activity(request, activity_type, product_id):
    user = request.user
    product = Product.objects.get(pk=product_id)
    activity = UserActivity(user=user, activity_type=activity_type, product=product)
    activity.save()
    return HttpResponse("Activity tracked successfully.")
