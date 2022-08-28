from django.db import models

# Create your models here.


class Product(models.Model):
    title = models.CharField(max_length=100)
    desc = models.CharField(max_length=500)
    img = models.CharField(max_length=500)
    price = models.CharField(max_length=500)
    views = models.FloatField(default=0)
    category = models.CharField(max_length=500)
    productSellAmount = models.FloatField(default=0)
    
    def __str__(self):
        return self.title