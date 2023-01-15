from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *


class PropertiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Properties
        fields = '__all__'
