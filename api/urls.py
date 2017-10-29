from rest_framework import routers
from .views import FolderViewSet, PageViewSet

router = routers.DefaultRouter()
router.register(r'folders', FolderViewSet)
router.register(r'pages', PageViewSet)
