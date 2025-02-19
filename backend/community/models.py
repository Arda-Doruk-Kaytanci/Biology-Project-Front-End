from django.db import models

class PostModels(models.Model):
    choices = [("Help", "Help"), ("Advice", "Advice"), ("General", "General")]
    post_name = models.CharField(max_length=100)
    tag = models.CharField(max_length=10, choices=choices, default="General")
    attachments = models.CharField(max_length=1000)

    def __str__(self):
        return self.post_name


class CommentModel(models.Model):
    posted_user = models.CharField(max_length=50)
    comment = models.CharField(max_length=1000)
    post = models.ForeignKey(PostModels, blank=False, null=False, on_delete=models.PROTECT)

    def __str__(self):
        return self.posted_user
