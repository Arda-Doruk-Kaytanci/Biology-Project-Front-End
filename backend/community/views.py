from rest_framework import generics, status
from rest_framework.throttling import UserRateThrottle
from rest_framework.pagination import BasePagination
from rest_framework.response import Response
from .models import PostModels
from .serializers import PostSerializer, CommentSerialzer


class PostView(generics.ListAPIView):
    queryset = PostModels.objects.all()
    throttle_classes = [UserRateThrottle]
    serializer_class = PostSerializer
    pagination_class = BasePagination


class GeneralPostView(generics.ListCreateAPIView):
    queryset = PostModels.objects.filter(tag="General")
    throttle_classes = [UserRateThrottle]
    serializer_class = PostSerializer
    pagination_class = BasePagination


class AdvisePostView(generics.ListCreateAPIView):
    queryset = PostModels.objects.filter(tag="Advise")
    throttle_classes = [UserRateThrottle]
    serializer_class = PostSerializer
    pagination_class = BasePagination


class HelpPostView(generics.ListCreateAPIView):
    queryset = PostModels.objects.filter(tag="Help")
    throttle_classes = [UserRateThrottle]
    serializer_class = PostSerializer
    pagination_class = BasePagination


class GeneralPostViewSingle(generics.RetrieveAPIView):
    queryset = PostModels.objects.filter(tag="General")
    serializer_class = PostSerializer


class HelpPostViewSingle(generics.RetrieveAPIView):
    queryset = PostModels.objects.filter(tag="Help")
    serializer_class = PostSerializer


class AdvisePostViewSingle(generics.RetrieveAPIView):
    queryset = PostModels.objects.filter(tag="Advise")
    serializer_class = PostSerializer


class AddCommentView(generics.CreateAPIView):
    serializer_class = CommentSerialzer

    def create(self, request, *args, **kwargs):
        tag = request.data.get("tag")
        post_id = request.data.get("id")
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        if post_id:
            try:
                post = PostModels.objects.get(id=post_id, tag=tag)
                serializer.save(post=post)
            except PostModels.DoesNotExist:
                return Response(
                    {"error": "Post not found."}, status=status.HTTP_404_NOT_FOUND
                )
        else:
            serializer.save()
        headers = self.get_success_headers(serializer.data)
        return Response(
            serializer.data, status=status.HTTP_201_CREATED, headers=headers
        )


class GetCommentView(generics.ListAPIView):
    serializer_class = CommentSerialzer

    def list(self, request, *args, **kwargs):
        post_id = request.query_params.get("id")
        tag = request.query_params.get("tag")
        if not post_id or not tag:
            return Response(
                {"error": "Both 'id' and 'tag' parameters are required."},
                status=status.HTTP_400_BAD_REQUEST,
            )
        try:
            post = PostModels.objects.get(id=post_id, tag=tag)
        except PostModels.DoesNotExist:
            return Response(
                {"error": "Post not found."}, status=status.HTTP_404_NOT_FOUND
            )

        comments = post.commentmodel_set.all()
        serializer = self.get_serializer(comments, many=True)
        return Response(serializer.data)
