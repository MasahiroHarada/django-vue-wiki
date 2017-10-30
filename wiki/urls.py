from django.conf.urls import url, include
from django.contrib import admin
from django.views import generic
from api.urls import router as api_router
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/', include(api_router.urls)),
    url(r'^jwt-token', obtain_jwt_token),
    url(r'^$', generic.TemplateView.as_view(template_name='index.html')),
]
