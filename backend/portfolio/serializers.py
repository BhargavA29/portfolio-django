from rest_framework import serializers
from .models import Project, Experience

class ProjectSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'tech_stack', 'demo_link', 'github_link', 'image', 'order']

    def get_image(self, obj):
        if obj.image:
            return obj.image.url  # This will return the complete Cloudinary URL
        return None

class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = ['id', 'company', 'position', 'description', 'tech_stack', 'start_date', 'end_date', 'is_current'] 