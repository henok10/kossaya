from django.contrib import admin
from listings.models import Listing
from listings.models import Poi, Transaction
from .forms import PoisForm

class PoiAdmin(admin.ModelAdmin):
    form = PoisForm


admin.site.register(Listing)
admin.site.register(Poi, PoiAdmin)
admin.site.register(Transaction)

