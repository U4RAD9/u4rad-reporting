from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth.models import Group
from django.contrib.auth import authenticate
from django.contrib.auth import login as ContribLogin
from django.contrib.auth import logout as ContribLogout
from users.models.instpersonalinfo import InstPersonalInfo as InstPersonalInfoModel
from users.models.institutionmodalities import InstitutionModalities as InstitutionModalitiesModel
from users.models.personalinfo import PersonalInfo as PersonalInfoModel
from users.models.qualificationdetails import QualificationDetails as QualificationDetailsModel
from users.models.workexp import WorkExp as WorkExpModel
from users.models.bankinginfo import BankingInfo as BankingInfoModel
from users.models.reportingarea import ReportingArea as ReportingAreaModel
from users.models.timeavailability import TimeAvailability as TimeAvailabilityModel
from users.models.patientdata import PatientInfo as PatientInfo
from users.models.patientdetails import PatientDetails as PatientDetails
from users.models.audiopatientdata import audioPatientDetails
from users.models.optometrydata import optopatientDetails
from users.models.vitalpatientdata import vitalPatientDetails
from users.models.DICOMData import DICOMData
from users.forms import DICOMDataForm
from django.contrib import messages
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from django.db.models import Q
from django.core.serializers import serialize
from django.contrib.auth import get_user_model
import json
import csv
from django.shortcuts import HttpResponse
from django.views import View
import os
import pydicom
from pydicom import dcmread
import matplotlib.pyplot as plt
from pydicom.data import get_testdata_files
from PIL import Image
from io import BytesIO
import pickle
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
import io
from googleapiclient.http import MediaIoBaseDownload
import PyPDF2
from users.models.Date import Date
from datetime import datetime
from users.models.Location import Location
from users.models.City import City

def login(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']

        user = authenticate(request, username=email, password=password)
        if user is not None:
            ContribLogin(request, user)
            group = user.groups.values_list('name', flat=True).first()

            if group == 'institution':
                return redirect('proinst')
            elif group == 'cardiologist':
                return redirect('allocation')
            elif group == 'cardiologist2':
                return redirect('xrayallocation')
            elif group == 'audiometrist':
                return redirect('audiometry')
            else:
                return redirect('reportingbot')
        else:
            messages.add_message(request, messages.ERROR, "Invalid credentials")
            return render(request, 'users/login.html')
    return render(request, 'users/login.html')


def logout(request):
    ContribLogout(request)
    return redirect('login')


def allocation(request):
    patients = PatientDetails.objects.all()
    return render(request, 'users/allocation.html', {'patients': patients})

def xrayallocation(request):
    patients = DICOMData.objects.all()
    return render(request, 'users/xrayallocation.html', {'patients': patients})

@login_required
def audiometry(request):
    return render(request, 'users/audiometry.html')


def regrdo(request):
    return render(request, 'users/regrdo.html')


def reginst(request):
    return render(request, 'users/reginst.html')


@login_required
def prordo(request):
    return render(request, 'users/prordo.html')


@login_required
def proinst(request):
    return render(request, 'users/proinst.html')


# 1
def InstPersonalInfo(request):
    if request.method == 'POST':
        instfullname = request.POST['instfullname']
        instadd = request.POST['instadd']
        cnprname = request.POST['cnprname']
        cnprphone = request.POST['cnprphone']
        cnprdesignation = request.POST['cnprdesignation']
        altcnprname = request.POST['altcnprname']
        altcnprdesignation = request.POST['altcnprdesignation']
        altcnprphone = request.POST['altcnprphone']
        emailfrpacs = request.POST['emailfrpacs']
        emailfraccount = request.POST['emailfraccount']
        accountcnpr = request.POST['accountcnpr']
        acccnprphone = request.POST['acccnprphone']
        password1 = request.POST['password1']

        user = User.objects.create_user(username=emailfrpacs, email=emailfrpacs, password=password1,
                                        first_name=instfullname)
                                        


        insti_group = Group.objects.get(name="institution")
        insti_group.user_set.add(user)

        x = InstPersonalInfoModel.objects.create(user=user, instadd=instadd, cnprname=cnprname,
                                                 cnprphone=cnprphone,
                                                 cnprdesignation=cnprdesignation, altcnprname=altcnprname,
                                                 altcnprdesignation=altcnprdesignation, altcnprphone=altcnprphone,
                                                 emailfraccount=emailfraccount,
                                                 accountcnpr=accountcnpr,
                                                 acccnprphone=acccnprphone)

        x.save()
        print("Done.!!")
        return JsonResponse(status=201, data={"message": "success"})
    else:
        print("Not done..")
        return JsonResponse(status=400, data={"message": "invalid data"})


# 2
def InstitutionModalities(request):
    if request.method == 'POST':
        mriopt1 = ','.join(request.POST.getlist('mriopt1'))
        mriothers1 = request.POST['mriothers1']
        ctopt1 = ','.join(request.POST.getlist('ctopt1'))
        ctothers1 = request.POST['ctothers1']
        xray1 = True if request.POST.get('xray1') == 'on' else False
        others1 = True if request.POST.get('other1') == 'on' else False
        rdoprefrence = request.POST['rdoprefrence']
        exnocase = request.POST['exnocase']
        urgent = request.POST['urgent']
        nonurgent = request.POST['nonurgent']

        x = InstitutionModalitiesModel.objects.create(mriopt1=mriopt1, mriothers1=mriothers1, ctopt1=ctopt1,
                                                      ctothers1=ctothers1,
                                                      xray1=xray1, others1=others1,
                                                      rdoprefrence=rdoprefrence, exnocase=exnocase,
                                                      urgent=urgent, nonurgent=nonurgent)
        x.save()
        print("Done.!!")
        return JsonResponse(status=201, data={"message": "success", "redirect": True})
    else:
        print("Not done..")
        return JsonResponse(status=400, data={"message": "invalid data"})

# 3
# def PersonalInfo(request):
#     if request.method == 'POST':
#         name = request.POST['name']
#         email = request.POST['email']
#         password = request.POST['password']
#         phone = request.POST['phone']
#         altphone = request.POST['altphone']
#         reference = request.POST['reference']
#         resume = request.FILES['resume']
#         uploadpicture = request.FILES['uploadpicture']
#         signature = request.FILES['signature']
#         companylogo = request.FILES['companylogo']
#         serviceslist = request.POST['serviceslist']

#         user = User.objects.create_user(username=email, email=email, password=password, first_name=name)

#         insti_group = Group.objects.get(name="radiologist")
#         insti_group.user_set.add(user)

#         x = PersonalInfoModel.objects.create(user=user, phone=phone, altphone=altphone,
#                                              reference=reference, resume=resume,
#                                              uploadpicture=uploadpicture, signature=signature, companylogo=companylogo, serviceslist=serviceslist)
#         x.save()
#         print("Done.!!")
#         return JsonResponse(status=201, data={"message": "success"})
#     else:
#         print("Not done..")
#         return JsonResponse(status=400, data={"message": "invalid data"})

############## Try ##################
User = get_user_model()

def PersonalInfo(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        password = request.POST.get('password')
        phone = request.POST.get('phone')
        altphone = request.POST.get('altphone')
        reference = request.POST.get('reference')
        resume = request.FILES.get('resume')
        uploadpicture = request.FILES.get('uploadpicture')
        signature = request.FILES.get('signature')
        companylogo = request.FILES.get('companylogo')
        serviceslist = request.POST.getlist('serviceslist')  # Get a list of selected services

        if not all([name, email, password, phone, resume, uploadpicture, signature, companylogo, serviceslist]):
            return JsonResponse(status=400, data={"message": "Missing required fields"})

        user = User.objects.create_user(username=email, email=email, password=password, first_name=name)
        insti_group, _ = Group.objects.get_or_create(name="radiologist")
        insti_group.user_set.add(user)

        personal_info = PersonalInfoModel.objects.create(user=user, phone=phone, altphone=altphone,
                                                         reference=reference, resume=resume,
                                                         uploadpicture=uploadpicture, signature=signature,
                                                         companylogo=companylogo)
        personal_info.serviceslist.set(serviceslist)  # Set the ManyToManyField with the selected services

        return JsonResponse(status=201, data={"message": "success"})
    else:
        return JsonResponse(status=400, data={"message": "Invalid request method"})


# 4
def QualificationDetails(request):
    if request.method == 'POST':
        print(request.POST)
        tensname = request.POST['tensname']
        tengrade = request.POST['tengrade']
        tenpsyr = request.POST['tenpsyr']
        tencertificate = request.FILES['tencertificate']
        twelvesname = request.POST['twelvesname']
        twelvegrade = request.POST['twelvegrade']
        twelvepsyr = request.POST['twelvepsyr']
        twelvecertificate = request.FILES['twelvecertificate']
        mbbsinstitution = request.POST['mbbsinstitution']
        mbbsgrade = request.POST['mbbsgrade']
        mbbspsyr = request.POST['mbbspsyr']
        mbbsmarksheet = request.FILES['mbbsmarksheet']
        mbbsdegree = request.FILES['mbbsdegree']
        mdinstitution = request.POST['mdinstitution']
        mdgrade = request.POST['mdgrade']
        mdpsyr = request.POST['mdpsyr']
        mddegree = request.FILES['mddegree']

        x = QualificationDetailsModel.objects.create(tensname=tensname, tengrade=tengrade, tenpsyr=tenpsyr,
                                                     tencertificate=tencertificate,
                                                     twelvesname=twelvesname, twelvegrade=twelvegrade,
                                                     twelvepsyr=twelvepsyr, twelvecertificate=twelvecertificate,
                                                     mbbsinstitution=mbbsinstitution, mbbsgrade=mbbsgrade,
                                                     mbbspsyr=mbbspsyr,
                                                     mbbsmarksheet=mbbsmarksheet, mbbsdegree=mbbsdegree,
                                                     mdinstitution=mdinstitution, mdgrade=mdgrade, mdpsyr=mdpsyr,
                                                     mddegree=mddegree)
        x.save()
        print("Done.!!")
        return JsonResponse(status=201, data={"message": "success"})
    else:
        print("Not done..")
        return JsonResponse(status=400, data={"message": "invalid data"})


# 5
def WorkExp(request):
    if request.method == 'POST':
        print(request.POST)
        exinstitution = request.POST['exinstitution']
        exstdate = request.POST['exstdate']
        exenddate = request.POST['exenddate']
        designation = request.POST['designation']
        exinstitution1 = request.POST['exinstitution1']
        exstdate1 = request.POST['exstdate1']
        exenddate1 = request.POST['exenddate1']
        designation1 = request.POST['designation1']
        prexst = request.POST['prexst']
        prexend = request.POST['prexend']
        pii = request.POST['pii']
        msname = request.POST['msname']
        mcirgno = request.POST['mcirgno']
        regcecr = request.FILES['regcer']

        x = WorkExpModel.objects.create(exinstitution=exinstitution, exstdate=exstdate, exenddate=exenddate,
                                        designation=designation,
                                        exinstitution1=exinstitution1, exstdate1=exstdate1,
                                        exenddate1=exenddate1, designation1=designation1,
                                        prexst=prexst, prexend=prexend,
                                        pii=pii, msname=msname,
                                        mcirgno=mcirgno, regcecr=regcecr)
        x.save()
        print("Done.!!")
        return JsonResponse(status=201, data={"message": "success"})
    else:
        print("Not done..")
        return JsonResponse(status=400, data={"message": "invalid data"})


# 6
def BankingInfo(request):
    if request.method == 'POST':
        print(request.POST)
        bankname = request.POST['bankname']
        acnumber = request.POST['acnumber']
        ifsc = request.POST['ifsc']
        pancardno = request.POST['pancardno']
        pandcard = request.FILES['pancard']
        cheque = request.FILES['cheque']
        pictureproof = request.FILES['pictureproof']

        x = BankingInfoModel.objects.create(bankname=bankname, acnumber=acnumber, ifsc=ifsc,
                                            pancardno=pancardno,
                                            pandcard=pandcard, cheque=cheque,
                                            pictureproof=pictureproof)
        x.save()
        print("Done.!!")
        return JsonResponse(status=201, data={"message": "success"})
    else:
        print("Not done..")
        return JsonResponse(status=400, data={"message": "invalid data"})


# 7
def ReportingArea(request):
    if request.method == 'POST':
        print(request.POST)
        mriopt = ','.join(request.POST.getlist('mriopt'))
        mriothers = request.POST['mriothers']
        ctopt = ','.join(request.POST.getlist('ctopt'))
        ctothers = request.POST['ctothers']
        xray = True if request.POST.get('xray') == 'on' else False
        others = True if request.POST.get('other') == 'on' else False

        x = ReportingAreaModel.objects.create(mriopt=mriopt, mriothers=mriothers, ctopt=ctopt,
                                              ctothers=ctothers,
                                              xray=xray, others=others)
        x.save()
        print("Done.!!")
        return JsonResponse(status=201, data={"message": "success"})
    else:
        print("Not done..")
        return JsonResponse(status=400, data={"message": "invalid data"})


# 8
def TimeAvailability(request):
    if request.method == 'POST':
        print(request.POST)
        monday = True if request.POST.get('monday') == 'on' else False
        tuesday = True if request.POST.get('tuesday') == 'on' else False
        wednesday = True if request.POST.get('wednesday') == 'on' else False
        thursday = True if request.POST.get('thursday') == 'on' else False
        friday = True if request.POST.get('friday') == 'on' else False
        saturday = True if request.POST.get('saturday') == 'on' else False
        sunday = True if request.POST.get('sunday') == 'on' else False
        monst = request.POST.get('monst')
        monend = request.POST.get('monend')
        tuest = request.POST.get('tuest')
        tueend = request.POST.get('tueend')
        wedst = request.POST.get('wedst')
        wedend = request.POST.get('wedend')
        thust = request.POST.get('thust')
        thuend = request.POST.get('thuend')
        frist = request.POST.get('frist')
        friend = request.POST.get('friend')
        satst = request.POST.get('satst')
        satend = request.POST.get('satend')
        sunst = request.POST.get('sunst')
        sunend = request.POST.get('sunend')

        x = TimeAvailabilityModel.objects.create(monday=monday, tuesday=tuesday, wednesday=wednesday,
                                                 thursday=thursday,
                                                 friday=friday, saturday=saturday, sunday=sunday, monst=monst,
                                                 monend=monend, tuest=tuest, tueend=tueend, wedst=wedst, wedend=wedend,
                                                 thust=thust, thuend=thuend, frist=frist, friend=friend, satst=satst,
                                                 satend=satend, sunst=sunst, sunend=sunend)
        x.save()
        print("Done.!!")
        return JsonResponse(status=201, data={"message": "success", "redirect": True})
    else:
        print("Not done..")
        return JsonResponse(status=400, data={"message": "invalid data"})

@csrf_exempt
def userExists(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        try:
            user = User.objects.get(email__exact=email)
        except User.DoesNotExist:
            user = None
        
        if (user is not None):
            return JsonResponse(status=200, data="This email has already been taken", safe=False)
        else:
            return JsonResponse(status=200, data=user is None, safe=False)
# Create your views here.

@csrf_exempt
def numberExists(request):
    if request.method == 'POST':
        cnprphone = request.POST.get('cnprphone')
        try:
            x = InstPersonalInfoModel.objects.get(cnprphone__exact=cnprphone)
        except InstPersonalInfoModel.DoesNotExist:
            x = None
        
        if (x is not None):
            return JsonResponse(status=200, data="This phone number already exist", safe=False)
        else:
            return JsonResponse(status=200, data=x is None, safe=False)

@csrf_exempt
def phoneExists(request):
    if request.method == 'POST':
        phone = request.POST.get('phone')
        try:
            x = PersonalInfoModel.objects.get(phone__exact=phone)
        except PersonalInfoModel.DoesNotExist:
            x = None
        
        if (x is not None):
            return JsonResponse(status=200, data="This phone number already exist", safe=False)
        else:
            return JsonResponse(status=200, data=x is None, safe=False)

#*************************************************** CSV Upload for General Purpose *******************************************************************
@csrf_exempt
def patientData(request):
    if request.method == 'GET':
        query = request.GET.get('query', None)
        patients = PatientInfo.objects.all()
        if query is not None:
            patients = patients.filter(Q(PatientId__icontains=query) | Q(PatientName__icontains=query))
        # response = {"patients": patients}
        response = serialize("json", patients)
        response = json.loads(response)
        return JsonResponse(status=200, data=response, safe=False)
    
    
    
#Added by Aman at 05:46

def uploadcsv(request):
    if request.method == 'POST' and request.FILES['csv_file']:
        csv_file = request.FILES['csv_file']
        
        # Adjust the field names according to your CSV file structure
        field_names = ['PatientId', 'PatientName', 'age', 'gender', 'TestDate', 'ReportDate', 'height', 'weight', 'blood', 'pulse', 'FarVisionRight', 'FarVisionLeft', 'NearVisionRight', 'NearVisionLeft', 'ColorBlindness']
        
        try:
            # Decode the CSV file data and split it into lines
            decoded_file = csv_file.read().decode('utf-8').splitlines()
            
            # Parse the CSV data using the DictReader
            reader = csv.DictReader(decoded_file, fieldnames=field_names)
            
            # Skip the header row if it exists
            if reader.fieldnames == field_names:
                next(reader)
            
            # Iterate over each row and insert into the PatientInfo table
            for row in reader:
                PatientInfo.objects.create(
                    PatientId=row['PatientId'],
                    PatientName=row['PatientName'],
                    age=row['age'],
                    gender=row['gender'],
                    TestDate=row['TestDate'],
                    ReportDate=row['ReportDate'],
                    height=row['height'],
                    weight=row['weight'],
                    blood=row['blood'],
                    pulse=row['pulse'],
                    FarVisionRight=row['FarVisionRight'],
                    FarVisionLeft=row['FarVisionLeft'],
                    NearVisionRight=row['NearVisionRight'],
                    NearVisionLeft=row['NearVisionLeft'],
                    ColorBlindness=row['ColorBlindness'],
                )
            
            return HttpResponse('CSV file uploaded successfully.')
        except Exception as e:
            return HttpResponse(f'Error: {str(e)}')
    else:
        # return HttpResponse('Please upload a CSV file.')
        return render(request, 'users/uploadcsv.html')


#audiometry****************************************************************** CSV Upload ***************************************************************************
def audiopatientDetails(request):
    if request.method == 'GET':
        query = request.GET.get('query', None)
        patients = audioPatientDetails.objects.all()
        if query is not None:
            patients = patients.filter(Q(PatientId__icontains=query) | Q(PatientName__icontains=query))
        # response = {"patients": patients}
        response = serialize("json", patients)
        response = json.loads(response)
        return JsonResponse(status=200, data=response, safe=False)



def uploadcsvforaudio(request):
    if request.method == 'POST' and request.FILES['csv_file']:
        csv_file = request.FILES['csv_file']
        
        # Adjust the field names according to your CSV file structure
        field_names = ['Timestamp', 'Name', 'Patient ID', 'Age', 'Gender', 'Left Air conduction DB 1 (250 Hz)', 'Left Air conduction DB 2 (500 Hz)', 'Left Air conduction DB 3 (1000 Hz)',
                        'Left Air conduction DB 4 (2000 Hz)', 'Left Air conduction DB 5 (4000 Hz)', 'Left Air conduction DB 6 (8000 Hz)', 'Left Bone Conduction 1 (250 Hz)', 
                        'Left Bone Conduction 2 (500 Hz)', 'Left Bone Conduction 3 (1000 Hz)', 'Left Bone Conduction 4 (2000 Hz)', 'Left Bone Conduction 5 (4000 Hz)', 
                        'Right Air Conduction 1 (250 Hz)', 'Right Air Conduction 2 (500 Hz)', 'Right Air Conduction 3 (1000 Hz)', 'Right Air Conduction 4 (2000 Hz)', 
                        'Right Air Conduction 5 (4000 Hz)', 'Right Air Conduction 6 (8000 Hz)', 'Right Bone Conduction 1 (250 Hz)', 'Right Bone Conduction 2 (500 Hz)', 
                        'Right Bone Conduction 3 (1000 Hz)', 'Right Bone Conduction 4 (2000 Hz)', 'Right Bone Conduction 5 (4000 Hz)', 'Left Ear Finding', 'Right Ear Finding']
        
        
        try:
            # Decode the CSV file data and split it into lines
            decoded_file = csv_file.read().decode('utf-8').splitlines()
            
            # Parse the CSV data using the DictReader
            reader = csv.DictReader(decoded_file, fieldnames=field_names)
            
            # Skip the header row if it exists
            if reader.fieldnames == field_names:
                next(reader)
            
            # Iterate over each row and insert into the PatientInfo table
            for row in reader:
                # Extract values for Left Air conduction DB columns
                left_ear_db_values = [
                    row['Left Air conduction DB 1 (250 Hz)'],
                    row['Left Air conduction DB 2 (500 Hz)'],
                    row['Left Air conduction DB 3 (1000 Hz)'],
                    row['Left Air conduction DB 4 (2000 Hz)'],
                    row['Left Air conduction DB 5 (4000 Hz)'],
                    row['Left Air conduction DB 6 (8000 Hz)'],
                ]

                # Concatenate values with commas and store in leftEarDB field
                left_ear_db_combined = ', '.join(left_ear_db_values)


                # Extract values for Left Bone conduction DB columns
                left_ear_bone_db_values = [
                    row['Left Bone Conduction 1 (250 Hz)'],
                    row['Left Bone Conduction 2 (500 Hz)'],
                    row['Left Bone Conduction 3 (1000 Hz)'],
                    row['Left Bone Conduction 4 (2000 Hz)'],
                    row['Left Bone Conduction 5 (4000 Hz)'],
                ]

                # Concatenate values with commas and store in leftEarDB field
                left_ear_bone_db_combined = ', '.join(left_ear_bone_db_values)

                # Extract values for Right Air conduction DB columns
                right_ear_db_values = [
                    row['Right Air Conduction 1 (250 Hz)'],
                    row['Right Air Conduction 2 (500 Hz)'],
                    row['Right Air Conduction 3 (1000 Hz)'],
                    row['Right Air Conduction 4 (2000 Hz)'],
                    row['Right Air Conduction 5 (4000 Hz)'],
                    row['Right Air Conduction 6 (8000 Hz)'],
                ]

                # Concatenate values with commas and store in leftEarDB field
                right_ear_db_combined = ', '.join(right_ear_db_values)


                # Extract values for Right Bone conduction DB columns
                right_ear_bone_db_values = [
                    row['Right Bone Conduction 1 (250 Hz)'],
                    row['Right Bone Conduction 2 (500 Hz)'],
                    row['Right Bone Conduction 3 (1000 Hz)'],
                    row['Right Bone Conduction 4 (2000 Hz)'],
                    row['Right Bone Conduction 5 (4000 Hz)'],
                ]

                # Concatenate values with commas and store in leftEarDB field
                right_ear_bone_db_combined = ', '.join(right_ear_bone_db_values)

                # Extract date from Timestamp
                # timestamp_str = row['Timestamp']
                # timestamp_date = datetime.strptime(timestamp_str, '%m/%d/%Y %H:%M:%S').date()
                # timestamp_date = timestamp_date.strftime('%d/%m/%Y')


                # Extract date and time from Timestamp
                timestamp_str = row['Timestamp']

                try:
                    # Try parsing with seconds included
                    timestamp_datetime = datetime.strptime(timestamp_str, '%m/%d/%Y %H:%M:%S')
                except ValueError:
                    # If parsing with seconds fails, try without seconds
                    timestamp_datetime = datetime.strptime(timestamp_str, '%m/%d/%Y %H:%M')

                    # Extract only the date part and format it as day/month/year
                timestamp_date = timestamp_datetime.date()
                timestamp_date_str = timestamp_date.strftime('%d/%m/%Y')

                audioPatientDetails.objects.create(
                    PatientId=row['Patient ID'],
                    PatientName=row['Name'],
                    age=row['Age'],
                    gender=row['Gender'],
                    TestDate=timestamp_date_str,
                    ReportDate=timestamp_date_str,
                    leftEarDB=left_ear_db_combined,
                    leftEarBoneDB=left_ear_bone_db_combined,
                    rightEarDB=right_ear_db_combined,
                    rightEarBoneDB=right_ear_bone_db_combined,
                    rightEarLevel=row['Left Ear Finding'],
                    leftEarLevel=row['Right Ear Finding'],
                )
            
            return HttpResponse('CSV file uploaded successfully.')
        except Exception as e:
            return HttpResponse(f'Error: {str(e)}')
    else:
        # return HttpResponse('Please upload a CSV file.')
        return render(request, 'users/uploadcsv.html')
    

#optometry****************************************************************** CSV Upload ***************************************************************************
def optopatientDetails(request):
    if request.method == 'GET':
        query = request.GET.get('query', None)
        patients = optopatientDetails.objects.all()
        if query is not None:
            patients = patients.filter(Q(PatientId__icontains=query) | Q(PatientName__icontains=query))
        # response = {"patients": patients}
        response = serialize("json", patients)
        response = json.loads(response)
        return JsonResponse(status=200, data=response, safe=False)



def uploadcsvforopto(request):
    if request.method == 'POST' and request.FILES['csv_file']:
        csv_file = request.FILES['csv_file']
        
        # Adjust the field names according to your CSV file structure
        field_names = ['Timestamp', 'Name', 'Patient ID', 'Age', 'Gender', 'Far vision right', 'Far vision left', 'Near vision right', 'Near vision left', 'Colour vision']
        
        
        try:
            # Decode the CSV file data and split it into lines
            decoded_file = csv_file.read().decode('utf-8').splitlines()
            
            # Parse the CSV data using the DictReader
            reader = csv.DictReader(decoded_file, fieldnames=field_names)
            
            # Skip the header row if it exists
            if reader.fieldnames == field_names:
                next(reader)
            
            # Iterate over each row and insert into the PatientInfo table
            for row in reader:
                
                # Extract date and time from Timestamp
                timestamp_str = row['Timestamp']

                try:
                    # Try parsing with seconds included
                    timestamp_datetime = datetime.strptime(timestamp_str, '%m/%d/%Y %H:%M:%S')
                except ValueError:
                    # If parsing with seconds fails, try without seconds
                    timestamp_datetime = datetime.strptime(timestamp_str, '%m/%d/%Y %H:%M')

                    # Extract only the date part and format it as day/month/year
                timestamp_date = timestamp_datetime.date()
                timestamp_date_str = timestamp_date.strftime('%d/%m/%Y')

                optopatientDetails.objects.create(
                    PatientId=row['Patient ID'],
                    PatientName=row['Name'],
                    age=row['Age'],
                    gender=row['Gender'],
                    TestDate=timestamp_date_str,
                    ReportDate=timestamp_date_str,
                    FarVisionRight=row['Far vision right'],
                    FarVisionLeft=row['Far vision left'],
                    NearVisionRight=row['Near vision right'],
                    NearVisionLeft=row['Near vision left'],
                    ColorBlindness=row['Colour vision'],
                )
            
            return HttpResponse('CSV file uploaded successfully.')
        except Exception as e:
            return HttpResponse(f'Error: {str(e)}')
    else:
        # return HttpResponse('Please upload a CSV file.')
        return render(request, 'users/uploadcsv.html')
    


#vital****************************************************************** CSV Upload ***************************************************************************
def vitalpatientDetails(request):
    if request.method == 'GET':
        query = request.GET.get('query', None)
        patients = vitalPatientDetails.objects.all()
        if query is not None:
            patients = patients.filter(Q(PatientId__icontains=query) | Q(PatientName__icontains=query))
        # response = {"patients": patients}
        response = serialize("json", patients)
        response = json.loads(response)
        return JsonResponse(status=200, data=response, safe=False)



def uploadcsvforvital(request):
    if request.method == 'POST' and request.FILES['csv_file']:
        csv_file = request.FILES['csv_file']
        
        # Adjust the field names according to your CSV file structure
        field_names = ['Timestamp', 'Patient Name', 'Patient ID', 'Age', 'Gender', 'BP', 'Pulse', 'Height', 'Weight']
        
        
        try:
            # Decode the CSV file data and split it into lines
            decoded_file = csv_file.read().decode('utf-8').splitlines()
            
            # Parse the CSV data using the DictReader
            reader = csv.DictReader(decoded_file, fieldnames=field_names)
            
            # Skip the header row if it exists
            if reader.fieldnames == field_names:
                next(reader)
            
            # Iterate over each row and insert into the PatientInfo table
            for row in reader:
                
                # Extract date and time from Timestamp
                timestamp_str = row['Timestamp']

                try:
                    # Try parsing with seconds included
                    timestamp_datetime = datetime.strptime(timestamp_str, '%m/%d/%Y %H:%M:%S')
                except ValueError:
                    # If parsing with seconds fails, try without seconds
                    timestamp_datetime = datetime.strptime(timestamp_str, '%m/%d/%Y %H:%M')

                    # Extract only the date part and format it as day/month/year
                timestamp_date = timestamp_datetime.date()
                timestamp_date_str = timestamp_date.strftime('%d/%m/%Y')

                vitalPatientDetails.objects.create(
                    PatientId=row['Patient ID'],
                    PatientName=row['Patient Name'],
                    age=row['Age'],
                    gender=row['Gender'],
                    TestDate=timestamp_date_str,
                    ReportDate=timestamp_date_str,
                    height=row['Height'],
                    weight=row['Weight'],
                    blood=row['BP'],
                    pulse=row['Pulse'],
                )
            
            return HttpResponse('CSV file uploaded successfully.')
        except Exception as e:
            return HttpResponse(f'Error: {str(e)}')
    else:
        # return HttpResponse('Please upload a CSV file.')
        return render(request, 'users/uploadcsv.html')    
        
            
             

# ECG BOT***************************************************************
def fetch_patient_data(request):
        patient_id = request.GET.get('patientId')
        patient_name = request.GET.get('patientName')
        age = request.GET.get('age')
        gender = request.GET.get('gender')
        HeartRate = request.Get.get('HeartRate')
        test_date = request.GET.get('testDate')
        report_date = request.GET.get('reportDate')
        report_image = request.GET.get('reportImage')  # Report image URL
        

        # You can modify this logic based on how you fetch patient data
        patient = request(
            PatientDetails,
            PatientId=patient_id,
            PatientName=patient_name,
            age=age,
            gender=gender,
            HeartRate=HeartRate,
            TestDate=test_date,
            ReportDate=report_date,
            reportimage=report_image
        )
    
    # Create a dictionary to hold the patient data
        patient_data = {
            'PatientId': patient.PatientId,
            'PatientName': patient.PatientName,
            'age': patient.age,
            'gender': patient.gender,
            'HeartRate': patient.HeartRate,
            'TestDate': patient.TestDate.strftime('%Y-%m-%d'),  # Format the date as needed
            'ReportDate': patient.ReportDate.strftime('%Y-%m-%d'),  # Format the date as needed
            'reportimage': patient.reportimage.url,  # Get the URL of the report image
        }
        
    
        return JsonResponse(patient_data)
        # Check if the patient's report status is updated



class Google(View):
    def get(self, request):
        google_drive_data = GoogleDrive()
        response = HttpResponse(google_drive_data)
        return response

def GoogleDrive():
    # The file that contains the OAuth 2.0 credentials.
    CLIENT_SECRET_FILE = 'users/GoogleDriveAPI.json'
    print(CLIENT_SECRET_FILE)

    # The name of the API and version of the API.
    API_NAME = 'drive'
    API_VERSION = 'v3'

    # The scopes that are required to access the API.
    SCOPES = ['https://www.googleapis.com/auth/drive']

    def create_service():
        print("at 1")
        # Create the credentials.
        creds = None
        if os.path.exists('token.pickle'):
            print("at 2")
            with open('token.pickle', 'rb') as token:
                creds = pickle.load(token)

        # If the credentials don't exist or are invalid, then create new ones.
        if not creds or not creds.valid:
            print("at 3")
            if creds and creds.expired and creds.refresh_token:
                print("at 4")
                creds.refresh(Request())
            else:
                print("at 5")
                # Create the flow object.
                flow = InstalledAppFlow.from_client_secrets_file(CLIENT_SECRET_FILE, SCOPES)

                # Run the flow to obtain the credentials.
                creds = flow.run_local_server(port=0)

                # Save the credentials for future use.
                with open('token.pickle', 'wb') as token:
                    pickle.dump(creds, token)
        # Create the service object.
        service = build(API_NAME, API_VERSION, credentials=creds)
        print("at 5")
        return service

    # folder_id = '1RjxYJcv4vbv1WFfcUtCWm-qh0N3KRd0n'
    folder_id = '1ejnci27e9p7Y7uk-huplMgWSqNGx6U30'
    print("at 6")
    service = create_service()
    print("at 7")

    existing_patient_ids = set(PatientDetails.objects.values_list('PatientId', flat=True))
    fetch_patient_data_from_folder(service, folder_id, existing_patient_ids)
    print("at 8")

def fetch_patient_data_from_folder(service, folder_id, existing_patient_ids):
    prefix = "https://lh3.googleusercontent.com/d/"
    print("at 8")

    stack = [(folder_id, None)]
    patient_data_by_date = {}

    while stack:
        current_folder_id, current_location_id = stack.pop()
        query = f"'{current_folder_id}' in parents and mimeType='application/vnd.google-apps.folder'"
        print("at 9")
        subfolders = service.files().list(q=query).execute()

        for subfolder in subfolders.get('files', []):
            subfolder_id = subfolder['id']
            subfolder_name = subfolder['name']
            print("at 10")
             
            # Process the subfolder even if it's not a known location
            stack.append((subfolder_id, subfolder_name))
            technician_name = subfolder_name
            location_id = None

            if technician_name:
                location = Location.objects.filter(technician_name=technician_name).first()
                
                if location:
                    location_id = location.id

                query = f"'{subfolder_id}' in parents"
                subfolder_files = service.files().list(q=query).execute().get('files', [])

                for data in subfolder_files:
                    if data['mimeType'] == 'application/pdf':
                        file_id = data['id']
                        # Create reportingimage by adding the prefix
                        reportimage = f'{prefix}{file_id}'
                        
                        # Rest of your code...

                        # Download the file content from Google Drive.
                        request = service.files().get_media(fileId=file_id)
                        pdf_files = io.BytesIO()
                        downloader = MediaIoBaseDownload(pdf_files, request)
                        done = False
                        while not done:
                            status, done = downloader.next_chunk()
                        pdf_reader = PyPDF2.PdfReader(pdf_files)

                        for page in pdf_reader.pages:
                            first_page_text = page.extract_text()
                            patient_id = str(first_page_text).split("Id :")[1].split(" ")[1].split("\n")[0]
                            if patient_id not in existing_patient_ids:
                                patient_name = str(first_page_text).split("Name :")[1].split("Age :")[0].split('\n')[0]
                                patient_age = str(first_page_text).split("Age :")[1].split(" ")[1].split("\n")[0]
                                patient_gender = str(first_page_text).split("Gender :")[1].split("\n")[0]
                                heart_rate = str(first_page_text).split("HR:")[1].split(" ")[1].split("/")[0]
                                report_time = str(first_page_text).split("Acquired on:")[1][12:17]
                                raw_date = str(first_page_text).split("Acquired on:")[1][0:11].strip()
                                formatted_date = datetime.strptime(raw_date, '%Y-%m-%d').date()
                                print(patient_name, patient_id)

                                # Update location_id within this loop if location is found

                                if formatted_date not in patient_data_by_date:
                                    patient_data_by_date[formatted_date] = []
                                patient_data_by_date[formatted_date].append(
                                    (patient_id, patient_name, patient_age, patient_gender, int(heart_rate), report_time))

                                if patient_id not in existing_patient_ids and location_id is not None:
                                    existing_patient_ids.add(patient_id)

                                    date, created = Date.objects.get_or_create(date_field=formatted_date,
                                                                                   location_id=location_id)

                                    patient = PatientDetails(
                                        PatientId=patient_id,
                                        PatientName=patient_name,
                                        age=patient_age,
                                        gender=patient_gender,
                                        HeartRate=heart_rate,
                                        TestDate=report_time,
                                        ReportDate=report_time,
                                        date_id=date.id,
                                        reportimage=reportimage
                                    )
                                    print(reportimage)
                                    patient.save()
                                    print(f"Patient saved: {patient}")


def report_patient(request, patient_id):
    # Your reporting logic here

    # Set a session variable to indicate that the button has been reported
    request.session[f"reportButtonState_{patient_id}"] = "reported"

    return HttpResponse("Reported successfully")  # You can customize the response as needed


#data***********************************
@csrf_exempt
def patientDetails(request):
    if request.method == 'GET':
        query = request.GET.get('query', None)
        patients = PatientDetails.objects.all()
        if query is not None:
            patients = patients.filter(Q(PatientId__icontains=query) | Q(PatientName__icontains=query))
        # response = {"patients": patients}
        response = serialize("json", patients)
        response = json.loads(response)
        return JsonResponse(status=200, data=response, safe=False)


def upload_dicom(request):
    if request.method == 'POST':
        form = DICOMDataForm(request.POST, request.FILES)
        if form.is_valid():
            dicom_instance = form.save(commit=False)

            # Save the instance to get the DICOM file path
            dicom_instance.save()

            # Extract metadata
            dicom_data = dcmread(dicom_instance.dicom_file.path)
            dicom_instance.patient_name = str(dicom_data.PatientName)
            dicom_instance.patient_id = str(dicom_data.PatientID)
            # Additional fields
            dicom_instance.age = dicom_data.PatientAge
            # dicom_instance.gender = dicom_data.PatientSex
            # Convert 'M' to 'Male' and 'F' to 'Female'
            dicom_instance.gender = 'Male' if dicom_data.PatientSex.upper() == 'M' else 'Female'

            # Format the study_date as "date/month/year"
            if dicom_data.StudyDate:
                datetime_obj = datetime.strptime(dicom_data.StudyDate, "%Y%m%d")
                dicom_instance.study_date = datetime_obj.strftime("%d/%m/%Y")
            else:
                dicom_instance.study_date = None

            dicom_instance.study_description = str(dicom_data.StudyDescription)

            # Convert DICOM image to JPEG-compatible format
            pixel_data = dicom_data.pixel_array
            if dicom_data.BitsAllocated == 16:
                pixel_data = pixel_data.astype('uint16')  # Convert to 16-bit unsigned integer
                pixel_data = pixel_data >> (dicom_data.BitsStored - 8)  # Right-shift to 8-bit

            # Convert DICOM image to JPEG and save
            with BytesIO() as output:
                Image.fromarray(pixel_data).convert('L').save(output, format='JPEG')  # 'L' for grayscale

                # Save the JPEG file
                dicom_instance.jpeg_file.save(f"{dicom_data.SOPInstanceUID}.jpg", content=BytesIO(output.getvalue()))

            # Update and save the instance with metadata
            dicom_instance.save()

            return HttpResponse("Image upload")  # Replace 'upload_success' with the name of your success page

    else:
        form = DICOMDataForm()

    return render(request, 'users/upload_dicom.html', {'form': form})        


