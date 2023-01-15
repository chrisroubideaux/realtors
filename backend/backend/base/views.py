from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

#from .properties import Properties
from .apartments import apartments
from .condos import condos
from .homes import homes
from .agents import agents


from .models import *

from .serializers import *

# Create your views here.


@api_view(['GET'])
def getRoutes(request):
    routes = [
        # featured properties
        '/api/properties/',
        '/api/properties/create/',
        '/api/properties/upload/',
        '/api/properties<id>/reviews/',
        '/api/properties/top/',
        '/api/properties/<id>/',
        '/api/properties/delete/<id>/',
        '/api/properties/<update>/<id>/',

        # featured apartments
        '/api/apartments/',
        '/api/apartments/create/',
        '/api/apartments/upload/',
        '/api/apartments<id>/reviews/',
        '/api/apartments/top/',
        '/api/apartments/<id>/',
        '/api/apartments/delete/<id>/',
        '/api/apartments/<update>/<id>/',

        # featured condos
        '/api/condos/',
        '/api/condos/create/',
        '/api/condos/upload/',
        '/api/condos<id>/reviews/',
        '/api/condos/top/',
        '/api/condos/<id>/',
        '/api/condos/delete/<id>/',
        '/api/condos/<update>/<id>/',

        # featured homes
        '/api/homes/',
        '/api/homes/create/',
        '/api/homes/upload/',
        '/api/homes<id>/reviews/',
        '/api/homes/top/',
        '/api/homes/<id>/',
        '/api/homes/delete/<id>/',
        '/api/homes/<update>/<id>/',

        # agents
        '/api/agents/',
        '/api/agents/create/',
        '/api/agents/upload/',
        '/api/agents<id>/reviews/',
        '/api/agents/top/',
        '/api/agents/<id>/',
        '/api/agents/delete/<id>/',
        '/api/agents/<update>/<id>/',

    ]
    return Response(routes)

# properties


@api_view(['GET'])
def getProperties(request):
    properties = Properties.objects.all()
    serializer = PropertiesSerializer(properties, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getProperty(request, pk):
    property = Properties.objects.get(id=pk)
    serializer = PropertiesSerializer(property, many=False)
    return Response(serializer.data)

#  apartments


@api_view(['GET'])
def getApartments(request):

    return Response(apartments)


@api_view(['GET'])
def getApartment(request, pk):
    apartment = None
    for i in apartments:
        if i['id'] == pk:
            apartment = i
            break
    return Response(apartment)

#  condos


@api_view(['GET'])
def getCondos(request):

    return Response(condos)


@api_view(['GET'])
def getCondo(request, pk):
    condo = None
    for i in condos:
        if i['id'] == pk:
            condo = i
            break
    return Response(condo)

# homes


@api_view(['GET'])
def getHomes(request):

    return Response(homes)


@api_view(['GET'])
def getHome(request, pk):
    home = None
    for i in homes:
        if i['id'] == pk:
            home = i
            break
    return Response(home)

# agents


@api_view(['GET'])
def getAgents(request):

    return Response(agents)


@api_view(['GET'])
def getAgent(request, pk):
    agent = None
    for i in agents:
        if i['id'] == pk:
            agent = i
            break
    return Response(agent)
