from rest_framework import generics, permissions
from .serializers import ListingSerializer, TransactionSerializer
from listings.models import Listing, Transaction
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from users.models import User

class ListingList(generics.ListAPIView):
    queryset = Listing.objects.all().order_by('-date_posted')
    serializer_class = ListingSerializer

class ListingUserList(generics.ListAPIView):
    serializer_class = ListingSerializer
    def get_queryset(self):
        user_id = self.kwargs['user']
        user = User.objects.get(id=user_id)
        queryset = Listing.objects.filter(user=user).order_by('-date_posted')
        return queryset

class ListingCreate(generics.CreateAPIView):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer


class ListingDetail(generics.RetrieveAPIView):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer


class ListingDelete(generics.DestroyAPIView):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer


class ListingUpdate(generics.UpdateAPIView):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer

class TransactionList(generics.ListAPIView):
    serializer_class = TransactionSerializer
    def get_queryset(self):
        listing_id = self.kwargs['listing']
        listing = Listing.objects.get(id=listing_id)
        queryset = Transaction.objects.filter(listing=listing, barang_dibeli=False).order_by('-date')
        return queryset

class TransactionUpdate(generics.UpdateAPIView):
    serializer_class = TransactionSerializer
    queryset = Transaction.objects.all()

class TransactionListUser(generics.ListAPIView):
    serializer_class = TransactionSerializer
    def get_queryset(self):
        listing_id = self.kwargs['listing']
        listing = Listing.objects.get(id=listing_id)
        queryset = Transaction.objects.filter(listing=listing, barang_dibeli=True).order_by('-date')
        return queryset

class TransactionUser(generics.ListAPIView):
    serializer_class = TransactionSerializer
    def get_queryset(self):
        user_id = self.kwargs['user']
        user = User.objects.get(id=user_id)
        queryset = Transaction.objects.filter(user=user, barang_dibeli=True).order_by('-date')
        return queryset
    
class TransactionCreate(generics.CreateAPIView):
    serializer_class = TransactionSerializer
    queryset = Transaction.objects.all()

class TransactionDetail(generics.RetrieveAPIView):
    serializer_class = TransactionSerializer
    queryset = Transaction.objects.all()

class TransactionDelete(generics.DestroyAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer