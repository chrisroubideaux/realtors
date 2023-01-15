from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Properties(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    realtorId = models.CharField(max_length=500, null=True, blank=True)
    realtor = models.CharField(max_length=500, null=True, blank=True)
    title = models.CharField(max_length=500, null=True, blank=True)
    name = models.CharField(max_length=500, null=True, blank=True)
    phone = models.CharField(max_length=500, null=True, blank=True)
    email = models.CharField(max_length=500, null=True, blank=True)
    bio = models.CharField(max_length=500, null=True, blank=True)
    propertyType = models.CharField(max_length=200, null=True, blank=True)
    rentOrBuy = models.CharField(max_length=200, null=True, blank=True)
    verified = models.CharField(max_length=200, null=True, blank=True)
    photo = models.ImageField(null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    image1 = models.ImageField(null=True, blank=True)
    image2 = models.ImageField(null=True, blank=True)
    image3 = models.ImageField(null=True, blank=True)
    image4 = models.ImageField(null=True, blank=True)
    description = models.CharField(max_length=500, null=True, blank=True)
    rooms = models.CharField(max_length=500, null=True, blank=True)
    bathrooms = models.CharField(max_length=500, null=True, blank=True)
    centralAir = models.CharField(max_length=500, null=True, blank=True)
    washerDryer = models.CharField(max_length=500, null=True, blank=True)
    microwave = models.CharField(max_length=500, null=True, blank=True)
    dishwasher = models.CharField(max_length=500, null=True, blank=True)
    fitnessCenter = models.CharField(max_length=500, null=True, blank=True)
    flooring = models.CharField(max_length=500, null=True, blank=True)
    price = models.CharField(max_length=500, null=True, blank=True)
    sqft = models.CharField(max_length=500, null=True, blank=True)
    location = models.CharField(max_length=500, null=True, blank=True)
    securityBuilding = models.CharField(max_length=500, null=True, blank=True)
    handicapAccess = models.CharField(max_length=500, null=True, blank=True)
    avalibleUnits = models.CharField(max_length=500, null=True, blank=True)
    garage = models.CharField(max_length=500, null=True, blank=True)
    petFriendly = models.CharField(max_length=500, null=True, blank=True)
    rating = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    id = models.AutoField(primary_key=True, editable=False)

    def _str_(self):
        return(self.name)
