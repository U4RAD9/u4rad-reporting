# Generated by Django 5.0.3 on 2024-04-05 13:22

import datetime
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0023_setcount_totalcasesdone'),
    ]

    operations = [
        migrations.CreateModel(
            name='ECGSetCount',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('TotalProposalbyClient', models.IntegerField(default=0)),
                ('TotalCasesDone', models.IntegerField(default=0)),
                ('date_field', models.DateField(default=datetime.datetime.now)),
                ('client', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='users.client')),
            ],
        ),
    ]