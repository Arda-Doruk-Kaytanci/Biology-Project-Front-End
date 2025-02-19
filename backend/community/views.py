from rest_framework import generics, status
from rest_framework.response import Response
from .models import PostModels, CommentModel
from .serializers import PostSerializer, CommentSerializer


class PostListView(generics.ListAPIView):
    serializer_class = PostSerializer

    def get_queryset(self):
        post_tag = self.request.query_params.get("tag")
        if post_tag == "All":
            return PostModels.objects.all()
        return PostModels.objects.filter(tag=post_tag)


class PostDetailView(generics.RetrieveAPIView):
    queryset = PostModels.objects.all()
    serializer_class = PostSerializer


class CommentCreateView(generics.CreateAPIView):
    serializer_class = CommentSerializer

    def create(self, request, *args, **kwargs):
        post_id = request.data.get("post")
        if not post_id:
            return Response(
                {"error": "post_id is required."}, status=status.HTTP_400_BAD_REQUEST
            )

        try:
            post = PostModels.objects.get(id=post_id)
        except PostModels.DoesNotExist:
            return Response(
                {"error": "Post not found."}, status=status.HTTP_404_NOT_FOUND
            )

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(post=post)
        headers = self.get_success_headers(serializer.data)
        return Response(
            serializer.data, status=status.HTTP_201_CREATED, headers=headers
        )


class PostCreateView(generics.CreateAPIView):
    serializer_class = PostSerializer

    def create(self, request, *args, **kwargs):
        post_name = request.data.get("post_name")
        tag = request.data.get("tag")
        attachments = request.data.get("attachments")

        if not (post_name and tag and attachments):
            return Response(
                {"error": "post_name is required."}, status=status.HTTP_400_BAD_REQUEST
            )

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        headers = self.get_success_headers(serializer.data)
        return Response(
            serializer.data, status=status.HTTP_201_CREATED, headers=headers
        )


class CommentListView(generics.ListAPIView):
    serializer_class = CommentSerializer

    def get_queryset(self):
        post_id = self.request.query_params.get("post_id")
        if not post_id:
            return CommentModel.objects.none()
        return CommentModel.objects.filter(post__id=post_id)
