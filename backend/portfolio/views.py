from django.shortcuts import render
from rest_framework import generics
from .models import Project, Experience
from .serializers import ProjectSerializer, ExperienceSerializer

# Create your views here.

class ProjectList(generics.ListAPIView):
    queryset = Project.objects.all().order_by('order')
    serializer_class = ProjectSerializer

class ExperienceList(generics.ListAPIView):
    queryset = Experience.objects.all().order_by('-start_date')
    serializer_class = ExperienceSerializer
