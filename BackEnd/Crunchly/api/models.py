from django.db import models

# Create your models here.
class User(models.Model):
    Username = models.CharField()
    Email = models.CharField()
    BirthDate = models.DateField()
    Password = models.CharField()

    def __str__(self):
        return self.name