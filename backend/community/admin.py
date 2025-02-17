from django.contrib import admin
from .models import PostModels, CommentModel

admin.site.register(PostModels)
admin.site.register(CommentModel)