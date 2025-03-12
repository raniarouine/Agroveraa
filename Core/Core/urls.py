from django.contrib import admin
from django.urls import path
from django.views.generic import RedirectView
from home.views import (
    MemberListCreateView,
    MemberRetrieveUpdateDestroyView,
    LoginAPI,
    ContactCreateView,
    MemberPaymentListCreateView,
    MemberPaymentRetrieveUpdateView
)

urlpatterns = [
    path('', RedirectView.as_view(url='/member/', permanent=False)),
    path('member/', MemberListCreateView.as_view(), name='member-list'),
    path('member/<int:pk>/', MemberRetrieveUpdateDestroyView.as_view(), name='member-detail'),
    path('payment/', MemberPaymentListCreateView.as_view(), name='payment-list'),
    path('payment/<int:pk>/', MemberPaymentRetrieveUpdateView.as_view(), name='payment-detail'),
    path('login/', LoginAPI.as_view(), name='login'),
    path('contact/', ContactCreateView.as_view(), name='contact'),
    path('admin/', admin.site.urls),
]
