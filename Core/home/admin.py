from django.contrib import admin
from .models import Member, MemberPayment, Contact

# Enregistrement des modèles
admin.site.register(Member)
admin.site.register(MemberPayment)  # Ajoutez cette ligne
admin.site.register(Contact)
