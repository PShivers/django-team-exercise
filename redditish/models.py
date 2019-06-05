# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Post(models.Model):
    created_at = models.DateTimeField(auto_now=True)
    title = models.CharField(default = '', max_length = 100)
    picture = models.CharField(default = '', max_length = 100)
    content = models.CharField(default = '', max_length = 100)
    site_url = models.CharField(default = '', max_length = 100)
    vote_total = models.IntegerField()
    

    def __str__(self):
        return self.title
    

class Comment(models.Model):
    created_at = models.DateTimeField(auto_now=True)
    content = models.CharField(default = '', max_length = 100)
    vote_total = models.IntegerField
    post = models.ForeignKey(Post, related_name='comment', on_delete=models.CASCADE)

    def __str__(self):
        return self.content