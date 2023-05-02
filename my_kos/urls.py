from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from listings.api import views as listings_api_views
from users.api import views as users_api_views
from django.views.generic import TemplateView
from . import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('api/', include('users.api.urls')),
    path('api/', include('listings.api.urls')),
       # Your other URL patterns go here  from react js
    path('', TemplateView.as_view(template_name='index.html')),
    path('costumer/signup/', TemplateView.as_view(template_name='index.html')),
    path('pemilikKos/signup/', TemplateView.as_view(template_name='index.html')),
    path('login/', TemplateView.as_view(template_name='index.html')),
    path('listings/', TemplateView.as_view(template_name='index.html')),
    path('register/', TemplateView.as_view(template_name='index.html')),
    path('coba/', TemplateView.as_view(template_name='index.html')),
    path('order/<int:id>/', TemplateView.as_view(template_name='index.html')),
    path('profileOwner/', TemplateView.as_view(template_name='index.html')),
    path('profileCustomer/', TemplateView.as_view(template_name='index.html')),
    path('listings/<int:id>/', TemplateView.as_view(template_name='index.html')),
    path('listingadd/', TemplateView.as_view(template_name='index.html')),
    path('listingupdate/', TemplateView.as_view(template_name='index.html')),
    path('listingsOwner/<int:id>/', TemplateView.as_view(template_name='index.html')),
    path('datakos/', TemplateView.as_view(template_name='index.html')),
    path('datakosApprove/<int:id>/', TemplateView.as_view(template_name='index.html')),
    path('datakosUser/<int:id>/', TemplateView.as_view(template_name='index.html')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)