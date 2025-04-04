from django.urls import path
from .views import index, user_login, register, user_logout, card_list, get_image

urlpatterns = [
    path('', index, name='index'),
    path('login/', user_login, name='login'),
    path('register/', register, name='register'),
    path('logout/', user_logout, name='logout'),
    path('cards/', card_list, name='card_list'),
    path('cards/<int:card_id>/image/', get_image, name='get_card_image'),
]