from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from .serializers import FileUploadSerializer
from ..utils import predict_disease

class FileUploadView(APIView):
    parser_classes = (MultiPartParser, FormParser)
    serializer_class = FileUploadSerializer

    def post(self, request, *args, **kwargs):
        file_serializer = self.serializer_class(data=request.data)
        
        if file_serializer.is_valid():
            # Process the file
            uploaded_file = request.FILES['file']
            disease = predict_disease(uploaded_file)

            return Response({"Detected Disease": disease}, status=status.HTTP_200_OK)
        else:
            return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)