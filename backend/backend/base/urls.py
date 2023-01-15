from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('properties/', views.getProperties, name="properties"),
    path('properties/<str:pk>/', views.getProperty, name="property"),
    # apartments
    path('', views.getRoutes, name="routes"),
    path('apartments/', views.getApartments, name="apartments"),
    path('apartments/<str:pk>/', views.getApartment, name="apartment"),
    # condos
    path('', views.getRoutes, name="routes"),
    path('condos/', views.getCondos, name="condos"),
    path('condos/<str:pk>/', views.getCondo, name="condo"),

    # homes
    path('', views.getRoutes, name="routes"),
    path('homes/', views.getHomes, name="homes"),
    path('homes/<str:pk>/', views.getHome, name="home"),

    # agents
    path('', views.getRoutes, name="routes"),
    path('agents/', views.getAgents, name="agents"),
    path('agents/<str:pk>/', views.getAgent, name="agent"),


]
