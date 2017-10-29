import django_filters
from rest_framework import viewsets, filters
from .models import Folder, Page
from .serializer import FolderSerializer, PageSerializer


class FolderViewSet(viewsets.ModelViewSet):
    queryset = Folder.objects.all()
    serializer_class = FolderSerializer


class PageViewSet(viewsets.ModelViewSet):
    queryset = Page.objects.all()
    serializer_class = PageSerializer
