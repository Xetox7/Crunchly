from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import UserData 

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "password", "username", "email")
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['username'],
            validated_data['email'],  
            validated_data['password']
        )
        return user

class UserDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserData
        fields = ("BirthDate",)