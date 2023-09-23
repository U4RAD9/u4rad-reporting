from django.db import models


class PatientInfo(models.Model):
    PatientId = models.CharField(max_length=15)
    PatientName = models.CharField(max_length=30)
    age = models.CharField(max_length=30)
    gender = models.CharField(max_length=15)
    TestDate = models.CharField(max_length=20)
    ReportDate = models.CharField(max_length=20)
    height = models.CharField(max_length=50, null=True, default=None, blank=True)
    weight = models.CharField(max_length=50, null=True, default=None, blank=True)
    blood = models.CharField(max_length=50, null=True, default=None, blank=True)
    pulse = models.CharField(max_length=50, null=True, default=None, blank=True)
    FarVisionRight = models.CharField(max_length=50, null=True, default=None, blank=True)
    FarVisionLeft = models.CharField(max_length=50, null=True, default=None, blank=True)
    NearVisionRight = models.CharField(max_length=50, null=True, default=None, blank=True)
    NearVisionLeft = models.CharField(max_length=50, null=True, default=None, blank=True)
    ColorBlindness = models.CharField(max_length=50, null=True, default=None, blank=True)

    # def __str__(self):
    #     return (self.PatientId, self.PatientName)
