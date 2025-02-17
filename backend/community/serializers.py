from rest_framework import serializers
from .models import PostModels, CommentModel

class PostSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = PostModels
        fields = "__all__"
        
class CommentSerialzer(serializers.ModelSerializer):
    
    class Meta:
        model = CommentModel
        fields = "__all__"