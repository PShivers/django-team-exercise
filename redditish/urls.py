from .views import PostViewSet, CommentViewSet
from rest_framework import routers

router = routers.SimpleRouter()

router.register('posts', PostViewSet)
router.register('comments', CommentViewSet)

urlpatterns = router.urls
