from django.contrib import admin
from .models import PostModels, CommentModel

class PostModelsAdmin(admin.ModelAdmin):
    list_display = ('id', 'post_name', 'tag', 'attachments')

class CommentModelAdmin(admin.ModelAdmin):
    list_display = ('id', 'posted_user', 'comment', 'post')

admin.site.register(PostModels, PostModelsAdmin)
admin.site.register(CommentModel, CommentModelAdmin)
