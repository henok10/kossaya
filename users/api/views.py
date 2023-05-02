from rest_framework import generics, permissions, status
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from .serializers import CostumerSignupSerializer, PemilikKosSignupSerializer, UserSerializer
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.views import APIView
from .permissions import IsCostumerUser, IsPemilikKosUser

from users.models import PemilikKos, Costumer, User
from .serializers import PemilikKosSerializer, CostumerSerializer

class CostumerSignupView(generics.GenericAPIView):
    serializer_class=CostumerSignupSerializer
    def post(self, request, *args, **kwargs):
        serializer=self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user=serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": Token.objects.get(user=user).key,
            "message": "account created successfully"
        })

class PemilikKosSignupView(generics.GenericAPIView):
    serializer_class=PemilikKosSignupSerializer
    def post(self, request, *args, **kwargs):
        serializer=self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user=serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": Token.objects.get(user=user).key,
            "message": "account created successfully"
        })

class CustomAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer=self.serializer_class(data=request.data, context={'request':request})
        serializer.is_valid(raise_exception=True)
        user=serializer.validated_data['user']
        token, created=Token.objects.get_or_create(user=user)
        return Response({
            'token':token.key,
            'username':user.username,
            'email':user.email,
            'user_id':user.pk,
            'is_costumer':user.is_costumer,
            'is_pemilikKos':user.is_pemilikKos
        })
 
class LogoutView(APIView):
    def post(self, request, format=None):
        if request.auth:
            request.auth.delete()
        return Response(status=status.HTTP_200_OK)


class CostumerOnlyView(generics.RetrieveAPIView):
    permission_classes=[permissions.IsAuthenticated&IsCostumerUser]
    serializer_class=UserSerializer

    def get_object(self):
        return self.request.user

class PemilikKosOnlyView(generics.RetrieveAPIView):
    permission_classes=[permissions.IsAuthenticated&IsPemilikKosUser]
    serializer_class=UserSerializer

    def get_object(self):
        return self.request.user


class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class PemilikKosList(generics.ListAPIView):
    queryset = PemilikKos.objects.all()
    serializer_class = PemilikKosSerializer

class PemilikKosDetail(generics.RetrieveAPIView):
    queryset = PemilikKos.objects.all()
    serializer_class = PemilikKosSerializer
    lookup_field = 'user'
 
class PemilikKosUpdate(generics.UpdateAPIView):
    queryset = PemilikKos.objects.all()
    serializer_class = PemilikKosSerializer
    lookup_field = 'user'

class CostumerDetail(generics.RetrieveAPIView):
    queryset = Costumer.objects.all()
    serializer_class = CostumerSerializer
    lookup_field = 'user'

class CostumerUpdate(generics.UpdateAPIView):
    queryset = Costumer.objects.all()
    serializer_class = CostumerSerializer
    lookup_field = 'user'



