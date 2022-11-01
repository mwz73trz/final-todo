from random import choices
from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.name}'

class Task(models.Model):
    PRIORITY = [
        ('LOW', 'Low'),
        ('MEDIUM', 'Medium'),
        ('HIGH', 'High'),
    ]
    name = models.CharField(max_length=50)
    priority = models.CharField(max_length=6, choices=PRIORITY)
    description = models.TextField()
    completed = models.BooleanField(default=False)
    due_date = models.DateField()
    created_date = models.DateTimeField(auto_now_add=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='tasks')

    def __str__(self):
        return f'{self.name}'

