# Example of content-based recommendation logic
from shop.models import Product, UserActivity
from django.contrib.auth.models import User

def content_based_recommendation(user):
    # Get user's activity
    user_activities = UserActivity.objects.filter(user=user)
    
    # Extract user's preferences
    user_preferences = set()
    for activity in user_activities:
        user_preferences.add(activity.product.sub_category)
    
    # Find similar products based on user preferences
    similar_products = []
    for preference in user_preferences:
        similar_products.extend(Product.objects.filter(sub_category=preference).exclude(useractivity__user=user))
    
    return similar_products

# Example of collaborative filtering recommendation logic
def collaborative_filtering_recommendation(user):
    # Get users similar to the current user based on activity
    similar_users = User.objects.exclude(id=user.id).filter(useractivity__in=user.useractivity_set.all()).distinct()
    
    # Aggregate products liked by similar users
    recommended_products = []
    for similar_user in similar_users:
        recommended_products.extend(similar_user.useractivity_set.filter(activity_type='like').values_list('product', flat=True))
    
    return Product.objects.filter(pk__in=recommended_products).exclude(useractivity__user=user)
