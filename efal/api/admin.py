from django.contrib import admin
from api.models import Product



@admin.register(Product)
class ArticleModel(admin.ModelAdmin):
    list_filter = ('title',)
