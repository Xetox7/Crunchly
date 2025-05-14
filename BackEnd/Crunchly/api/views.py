from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import User
from .serializer import UserSerializer

@api_view(['GET'])
def get_user(request):
    return Response(UserSerializer({'Username':"pedro", 'Email':"pedro123@gmail.com",'BirthDate':"10/25/2006",'Password':"duduś"}).data)