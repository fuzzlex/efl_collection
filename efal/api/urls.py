from django.urls import path, include
from .views import ProductViewSet, UserViewSet
from rest_framework.routers import DefaultRouter

# ArticleDetails, ArticleList,article_list, article_details,

router = DefaultRouter()
router.register('article', ProductViewSet, basename='article')
router.register('users', UserViewSet)

urlpatterns = [
    
    path('', include(router.urls)),
    # path('', home , name='home')
    # path('', article_list, name='article_list' ),
    # path('<str:pk>', article_details, name='article_details' ),

    # path('', ArticleList.as_view() , name='article_list' ),
    # path('<str:id>', ArticleDetails.as_view() , name='article_list' ),




]
