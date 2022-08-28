from rest_framework import serializers
from .models import Product
from django.contrib.auth.models import User
from rest_framework.authtoken.views import Token



class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = ['id', 'title', 'img', 'price', 'category', 'desc', "productSellAmount", "views" ]





class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']

        extra_kwargs= {'password' : {
            'write_only': True,
            'required' : True
        }}
        

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user

