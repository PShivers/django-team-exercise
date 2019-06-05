from .models import Post, Comment
from rest_framework import serializers


class PostSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Post
        fields = ('created_at', 'title', 'picture',
                  'content', 'site_url', 'vote_total')


class CommentSerializer(serializers.HyperlinkedModelSerializer):
    post = serializers.PrimaryKeyRelatedField(
        queryset=Post.objects.all()
    )

    class Meta:
        model = Comment
        fields = ('id', 'created_at', 'content', 'vote_total', 'post',)
