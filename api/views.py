from rest_framework import viewsets
from .models import Folder, Page
from .serializer import FolderSerializer, PageSerializer
from rest_framework.permissions import IsAuthenticated


class FolderViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    queryset = Folder.objects.all().order_by('-created_at')
    serializer_class = FolderSerializer


class PageViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    queryset = Page.objects.all().order_by('-updated_at')
    serializer_class = PageSerializer
