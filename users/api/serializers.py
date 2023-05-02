from rest_framework import serializers
from users.models import User, Costumer, PemilikKos
from listings.models import Listing
from listings.api.serializers import ListingSerializer

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'is_costumer', 'is_pemilikKos']

class CostumerSignupSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style={"input_type": "password"}, write_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'password2']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def save(self, **kwargs):
        user = User(
            username=self.validated_data['username'],
            email=self.validated_data['email']
        )
        password = self.validated_data['password']
        password2 = self.validated_data['password2']
        if password != password2:
            raise serializers.ValidationError({"error": "password do not match hahha"})
        user.set_password(password)
        user.is_costumer = True
        user.save()
        Costumer.objects.create(user=user)
        return user

class PemilikKosSignupSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style={"input_type": "password"}, write_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'password2']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def save(self, **kwargs):
        user = User(
            username=self.validated_data['username'],
            email=self.validated_data['email']
        )
        password = self.validated_data['password']
        password2 = self.validated_data['password2']
        if password != password2:
            raise serializers.ValidationError({"error": "password do not match hihihi"})
        user.set_password(password)
        user.is_pemilikKos = True
        user.save()
        PemilikKos.objects.create(user=user)
        return user

class PemilikKosSerializer(serializers.ModelSerializer):
    user_listings = serializers.SerializerMethodField()

    def get_user_listings(self, obj):
        query = Listing.objects.filter(user=obj.user)
        listings_serialized = ListingSerializer(query, many=True)
        return listings_serialized.data

    class Meta:
        model = PemilikKos
        fields = '__all__'

class CostumerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Costumer
        fields = '__all__'

