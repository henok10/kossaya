from rest_framework.permissions import BasePermission

class IsCostumerUser(BasePermission):
    def has_permission(self, request, view):

        return bool(request.user and request.user.is_costumer)

class IsPemilikKosUser(BasePermission):
    def has_permission(self, request, view):

        return bool(request.user and request.user.is_pemilikKos)
        
