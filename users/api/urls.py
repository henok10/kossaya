from django.urls import path
from users.api import views as users_api_views
# from .views import CostumerSignupView, PemilikKosSignupView, CustomAuthToken, LogoutView, CostumerOnlyView, PemilikKosOnlyView, ProfileList, ProfileDetail ,ProfileUpdate

urlpatterns=[
    path('signup/costumer/', users_api_views.CostumerSignupView.as_view()),
    path('signup/pemilikKos/', users_api_views.PemilikKosSignupView.as_view()),
    path('login/', users_api_views.CustomAuthToken.as_view(), name='auth-token'),
    path('logout/', users_api_views.LogoutView.as_view(), name='logout-view'),
    path('costumer/dashboard', users_api_views.CostumerOnlyView.as_view(), name='costumer-dashboard'),
    path('pemilikKos/dashboard', users_api_views.PemilikKosOnlyView.as_view(), name='pemilikKos-dashboard'),
    path('profiles/', users_api_views.UserList.as_view()),
    path('profiles/pemilikKos/', users_api_views.PemilikKosList.as_view()),
    path('profiles/pemilikKos/<int:user>/', users_api_views.PemilikKosDetail.as_view()),
    path('profiles/pemilikKos/<int:user>/update/', users_api_views.PemilikKosUpdate.as_view()),
    path('profiles/customer/<int:user>/update/', users_api_views.CostumerUpdate.as_view()),
    path('profiles/customer/<int:user>/', users_api_views.CostumerDetail.as_view()),
]