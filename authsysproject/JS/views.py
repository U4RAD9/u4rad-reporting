from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.contrib.auth import logout as ContribLogout
from django.views.generic import TemplateView
from django.core import serializers

# Create your views here.

@method_decorator(login_required, name='dispatch')
class ReportingBotView(TemplateView):
    template_name = 'frontend/index.html'

    def get_context_data(self, **kwargs):
        user = self.request.user

        # Serialize the serviceslist field
        serialized_serviceslist = serializers.serialize('json', user.personalinfo.serviceslist.all())
        serialized_exportlist = serializers.serialize('json', user.personalinfo.exportlist.all())

        # Get the URLs and remove the S3 prefix if present
        s3_prefix = 'https://u4rad-s3-reporting-bot.s3.ap-south-1.amazonaws.com/'

        signature_url = user.personalinfo.signature.url if user.personalinfo.signature else None
        companylogo_url = user.personalinfo.companylogo.url if user.personalinfo.companylogo else None

        # Remove S3 prefix
        if signature_url and signature_url.startswith(s3_prefix):
            signature_url = signature_url[len(s3_prefix):]
        if companylogo_url and companylogo_url.startswith(s3_prefix):
            companylogo_url = companylogo_url[len(s3_prefix):]

        return {
            'current_user': {
                'username': user.first_name,
                'full_name': "{first_name} {last_name}".format(first_name=user.first_name, last_name=user.last_name),
                #'signature': user.personalinfo.signature.url,
                #'companylogo': user.personalinfo.companylogo.url,
                'signature': signature_url,
                'companylogo': companylogo_url,
                'designation': user.workexp.designation,
                'serviceslist': serialized_serviceslist,
                'exportlist': serialized_exportlist,
            }
        }

    
          
