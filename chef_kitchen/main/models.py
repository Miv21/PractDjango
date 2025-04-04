from django.contrib.auth.models import AbstractUser
from django.db import models

class Role(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

class CustomUser(AbstractUser):
    role = models.ForeignKey(Role, on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return self.username

        


class Card(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    protein = models.FloatField()
    fat = models.FloatField()
    carbohydrates = models.FloatField()
    energy = models.FloatField()
    total_weight = models.FloatField()
    image = models.BinaryField()

    def __str__(self):
        return self.name



