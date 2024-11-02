from django.urls import path
from . import views

urlpatterns = [
    path('api/projects/', views.ProjectList.as_view(), name='project-list'),
    path('api/experiences/', views.ExperienceList.as_view(), name='experience-list'),
] 