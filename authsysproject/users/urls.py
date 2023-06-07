from django.urls import path
from . import views

# from django.contrib.auth import views

urlpatterns = [
    path('', views.login, name='login'),
    path('logout', views.logout, name='logout'),
    path('regrdo/', views.regrdo, name='regrdo'),
    path('reginst', views.reginst, name='reginst'),
    path('reginst/personal', views.InstPersonalInfo, name='reginst.personal'),
    path('reginst/modalities', views.InstitutionModalities, name='reginst.modalities'),
    path('regrdo/personal', views.PersonalInfo, name='regrdo.personal'),
    path('regrdo/qualificationdetails', views.QualificationDetails, name='regrdo.qualificationdetails'),
    path('regrdo/workexp', views.WorkExp, name='regrdo.workexp'),
    path('regrdo/bankinginfo', views.BankingInfo, name='regrdo.bankinginfo'),
    path('regrdo/reportingarea', views.ReportingArea, name='regrdo.reportingarea'),
    path('regrdo/timeavailability', views.TimeAvailability, name='regrdo.timeavailability'),
    path('prordo', views.prordo, name='prordo'),
    path('proinst', views.proinst, name='proinst'),
    path('user-exists', views.userExists, name='userexists'),
    path('number-exists', views.numberExists, name='numberexists'),
    path('phone-exists', views.phoneExists, name='phoneexists'),
    path('patientdata', views.patientData, name='patientdata'),
    path('uploadcsv', views.uploadcsv, name='uploadcsv'),
]
