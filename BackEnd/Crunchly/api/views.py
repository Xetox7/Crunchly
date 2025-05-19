from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializer import UserSerializer, UserDataSerializer
from django.contrib.auth import get_user_model
from .models import UserData
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token['username'] = user.username

        return token
    
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
def get_users(request):
    users = get_user_model().objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def create_users(request):
    user_serializer = UserSerializer(data=request.data)
    userdata_serializer = UserDataSerializer(data=request.data)

    if user_serializer.is_valid() and userdata_serializer.is_valid():
        user = user_serializer.save()
        UserData.objects.create(UserId=user, BirthDate=userdata_serializer.validated_data['BirthDate'])
        return Response({'message': 'Użytkownik został pomyślnie utworzony.'}, status=status.HTTP_201_CREATED)
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)