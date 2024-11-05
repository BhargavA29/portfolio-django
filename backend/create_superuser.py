from django.contrib.auth.models import User
from django.core.management.base import BaseCommand
import os

class Command(BaseCommand):
    def handle(self, *args, **options):
        if User.objects.count() == 0:
            username = os.getenv('DJANGO_SUPERUSER_USERNAME', 'admin')
            email = os.getenv('DJANGO_SUPERUSER_EMAIL', 'admin@example.com')
            password = os.getenv('DJANGO_SUPERUSER_PASSWORD', 'admin')
            print('Creating superuser...')
            admin = User.objects.create_superuser(
                username=username, 
                email=email, 
                password=password
            )
            admin.save()
        else:
            print('Admin accounts can only be initialized if no Accounts exist') 