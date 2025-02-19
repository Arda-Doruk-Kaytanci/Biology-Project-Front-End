from django.urls import path
from .views import PostListView, PostDetailView, CommentListView, CommentCreateView, PostCreateView

urlpatterns = [
    path("posts", PostListView.as_view(), name="posts"),
    path("posts/<int:pk>", PostDetailView.as_view(), name="post single"),
    path("comments", CommentListView.as_view(), name="comment list"),
    path("comments/create", CommentCreateView.as_view(), name="create comment"),
    path("posts/create", PostCreateView.as_view(), name="create post")
]
