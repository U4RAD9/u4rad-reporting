from django.db import models


class PatientInfo(models.Model):
    PatientId = models.CharField(max_length=50)
    PatientName = models.CharField(max_length=70)
    age = models.CharField(max_length=50)
    gender = models.CharField(max_length=50)
    TestDate = models.CharField(max_length=50, null=True, blank=True)
    ReportDate = models.CharField(max_length=50, null=True, blank=True)
    FarVisionRight = models.CharField(max_length=50, null=True, default=None, blank=True)
    FarVisionLeft = models.CharField(max_length=50, null=True, default=None, blank=True)
    NearVisionRight = models.CharField(max_length=50, null=True, default=None, blank=True)
    NearVisionLeft = models.CharField(max_length=50, null=True, default=None, blank=True)
    ColorBlindness = models.CharField(max_length=50, null=True, default=None, blank=True)

    def __str__(self):
        return self.PatientName