from django.db import models


class PatientInfo(models.Model):
    PatientId = models.CharField(max_length=15)
    PatientName = models.CharField(max_length=30)
    age = models.CharField(max_length=30)
    gender = models.CharField(max_length=15)
    TestDate = models.CharField(max_length=20)
    ReportDate = models.CharField(max_length=20)

    # def __str__(self):
    #     return (self.PatientId, self.PatientName)
