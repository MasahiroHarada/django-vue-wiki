from django.db import models
import uuid as uuid_module


class UuidModel(models.Model):
    uuid = models.CharField(max_length=32, primary_key=True)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        if not self.uuid:
            self.uuid = str(uuid_module.uuid4()).replace("-", "")

    class Meta:
        abstract = True


class Folder(UuidModel):
    name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Page(UuidModel):
    title = models.CharField(max_length=255)
    body = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    folder_field = models.ForeignKey(Folder, on_delete=models.CASCADE, related_name="pages", db_column="folder_uuid")
