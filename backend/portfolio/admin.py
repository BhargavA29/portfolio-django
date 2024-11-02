from django.contrib import admin
from .models import Project, Experience

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'order', 'tech_stack', 'created_at')
    list_display_links = ('title',)
    list_editable = ('order',)
    ordering = ['order', '-created_at']
    search_fields = ('title', 'description', 'tech_stack')

@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ('company', 'position', 'start_date', 'end_date', 'is_current')
    search_fields = ('company', 'position', 'description')
