from rest_framework.views import APIView
from rest_framework import generics
from .models import Member, Contact, MemberPayment
from .serializers import MemberSerializer, ContactSerializer, MemberPaymentSerializer, LoginSerializer
from django.contrib.auth import authenticate
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

# API de connexion
class LoginAPI(APIView):
    def post(self, request):
        data = request.data
        serializer = LoginSerializer(data=data)

        if not serializer.is_valid():
            return Response({"status": False, "data": serializer.errors}, status=400)

        email = serializer.validated_data['email']
        password = serializer.validated_data['password']

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({"status": False, "message": "Invalid credentials"}, status=400)

        user_obj = authenticate(request, username=user.username, password=password)

        if user_obj:
            token, _ = Token.objects.get_or_create(user=user_obj)
            return Response({"status": True, "data": {'token': str(token)}})

        return Response({"status": False, "message": "Invalid credentials"}, status=400)

# CRUD Membres
class MemberListCreateView(generics.ListCreateAPIView):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer
    permission_classes = []

class MemberRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer
    permission_classes = []

# CRUD Paiements
class MemberPaymentListCreateView(generics.ListCreateAPIView):
    queryset = MemberPayment.objects.all()
    serializer_class = MemberPaymentSerializer
    permission_classes = []

    def perform_create(self, serializer):
        name = self.request.data.get('name')
        phone=self.request.data.get('phone')
        payment_status = self.request.data.get('payment_status')
        payment_date = self.request.data.get('payment_date')

        serializer.save(name=name, phone=phone, payment_status=payment_status, payment_date=payment_date)

class MemberPaymentRetrieveUpdateView(generics.RetrieveUpdateDestroyAPIView):
    queryset = MemberPayment.objects.all()
    serializer_class = MemberPaymentSerializer
    permission_classes = []

# Formulaire de contact
class ContactCreateView(generics.CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    permission_classes = []
