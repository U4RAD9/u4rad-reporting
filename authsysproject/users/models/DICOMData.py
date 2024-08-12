from django.db import models
from .personalinfo import PersonalInfo
from .Xray_Location import XLocation



class DICOMData(models.Model):
    patient_name = models.CharField(max_length=50, blank=True)
    patient_id = models.CharField(max_length=20, blank=True)
    age = models.CharField(max_length=50, blank=True)
    gender = models.CharField(max_length=50, blank=True)
    study_date = models.CharField(max_length=50, blank=True)
    study_id = models.CharField(max_length=100, blank=True)
    study_description = models.CharField(max_length=100, blank=True)
    isDone = models.BooleanField(default=False)
    NonReportable = models.BooleanField(default=False)
    notes = models.CharField(max_length=50000, default=True)
    location = models.CharField(max_length=100, blank=True, null=True) 
    radiologist = models.ManyToManyField(PersonalInfo, blank=True)
    body_part_examined = models.CharField(max_length=100, blank=True, null=True)


    def __str__(self):
        return str(self.patient_name)




class DICOMFile(models.Model):
    dicom_data = models.ForeignKey(DICOMData, related_name='dicom_files', on_delete=models.CASCADE)
    dicom_file = models.FileField(upload_to='dicom_files/')


class JPEGFile(models.Model):
    dicom_data = models.ForeignKey(DICOMData, related_name='jpeg_files', on_delete=models.CASCADE)
    jpeg_file = models.ImageField(upload_to='jpeg_files/')