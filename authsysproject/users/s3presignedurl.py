import boto3
from botocore.exceptions import NoCredentialsError, PartialCredentialsError
import sys
import requests

def generate_presigned_url(bucket_name, object_name, operation):
    try:
        # Initialize a session using Amazon S3
        s3_client = boto3.client('s3', region_name='ap-south-1', config=boto3.session.Config(signature_version='s3v4'))
        
        # Generate a presigned URL for the S3 object
        url = s3_client.generate_presigned_url(ClientMethod=operation,
                                               Params={'Bucket': bucket_name,
                                                       'Key': object_name},
                                               ExpiresIn=3600)
    except (NoCredentialsError, PartialCredentialsError):
        print("Credentials not available.")
        return None
    except Exception as e:
        print(f"An error occurred: {e}")
        return None
    
    return url

if __name__ == "__main__":
    if len(sys.argv) != 4:
        print("Usage: python s3presignedurl.py <bucket_name> <object_name> <operation>")
        sys.exit(1)

    bucket_name = sys.argv[1]
    object_name = sys.argv[2]
    operation = sys.argv[3]  # e.g., 'get_object' for download, 'put_object' for upload

    print("-" * 80)
    print("Welcome to the Amazon S3 presigned URL demo.")
    print("-" * 80)

    presigned_url = generate_presigned_url(bucket_name, object_name, operation)
    if presigned_url:
        print(f"INFO: Got presigned URL: {presigned_url}")
        if operation == 'get_object':
            print("Using the Requests package to send a request to the URL.")
            try:
                response = requests.get(presigned_url)
                print("Got response:")
                print(f"Status: {response.status_code}")
                print(response.text)
            except Exception as e:
                print(f"An error occurred when sending the request: {e}")
    else:
        print("Failed to generate presigned URL.")
