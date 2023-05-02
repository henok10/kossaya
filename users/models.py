from django.db import models
from django.db.models.signals import  post_save
from django.conf import settings
from django.dispatch import receiver
from django.contrib.auth.models import AbstractUser
from rest_framework.authtoken.models import Token



class User(AbstractUser):
    email = models.EmailField(max_length=255, unique=True)
    is_costumer = models.BooleanField(default=False)
    is_pemilikKos = models.BooleanField(default=False)

    def __str__(self):
        return self.username

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)

class Costumer(models.Model): 
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='costumer')
    full_name = models.CharField(max_length=20, null=True, blank=True)
    phone_number = models.CharField(max_length=20, null=True, blank=True)
    address = models.CharField(max_length=200, null=True, blank=True)
    date_of_birth = models.DateField(max_length=200, null=True, blank=True)
    profile_picture = models.ImageField(
        upload_to='profile_pictures/%Y/%m/%d/', null=True, blank=True)

    def __str__(self):
        return self.user.username

class PemilikKos(models.Model):
    user = models.OneToOneField(User, related_name='pemilikKos', on_delete=models.CASCADE)
    agency_name = models.CharField(max_length=20, null=True, blank=True)
    phone_number = models.CharField(max_length=25, null=True, blank=True)
    no_rekening = models.CharField(max_length=100, null=True, blank=True)
    address = models.CharField(max_length=200, null=True, blank=True)
    bio = models.TextField(null=True, blank=True)
    profile_picture = models.ImageField(
        upload_to='profile_pictures/%Y/%m/%d/', null=True, blank=True)

    def __str__(self):
        return self.user.username
