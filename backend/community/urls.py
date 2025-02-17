from django.urls import path
from .views import PostView, HelpPostView, GeneralPostView, AdvisePostView, AdvisePostViewSingle, GeneralPostViewSingle, HelpPostViewSingle

urlpatterns = [
    path("all", PostView.as_view(), name="All"),
    path("general", GeneralPostView.as_view(), name="General"),
    path("help", HelpPostView.as_view(), name="Help"),
    path("advise", AdvisePostView.as_view(), name="Adivse"),
    path("general/<int:pk>", GeneralPostViewSingle.as_view(), name="General Single"),
    path("help/<int:pk>", HelpPostViewSingle.as_view(), name="Help Single"),
    path("advise/<int:pk>", AdvisePostViewSingle.as_view(), name="Adivse Single"),
]
