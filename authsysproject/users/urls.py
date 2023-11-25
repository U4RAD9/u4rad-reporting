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
    # path('patientdata', views.patientData, name='patientdata'),
    path('patientdetails', views.patientDetails, name='patientdetails'),
    path('optometrydata', views.optometryData, name='optometrydata'),
    path('audiopatientdata', views.audiopatientDetails, name='audiopatientdata'),
    # path('uploadcsv', views.uploadcsv, name='uploadcsv'),
    path('uploadcsvforaudio', views.uploadcsvforaudio, name='uploadcsvforaudio'),
    path('uploadcsvforopto', views.uploadcsvforopto, name='uploadcsvforopto'),
    path('serviceslist', views.PersonalInfo, name='serviceslist'),
    path('allocation', views.allocation, name='allocation'),
    path('audiometry', views.audiometry, name='audiometry'),
    path('fetch_patient_data', views.fetch_patient_data, name='fetch_patient_data'),
    path('googledrive/', views.Google.as_view(), name='upload_csv'),

]
