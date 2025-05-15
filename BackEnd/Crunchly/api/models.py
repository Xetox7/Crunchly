from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model() 

class UserData(models.Model):
    UserId = models.ForeignKey(User, on_delete=models.CASCADE)  
    BirthDate = models.DateField()

    def __str__(self):
        return str(self.UserId) 