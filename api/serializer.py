from rest_framework import serializers
from .models import Folder, Page
from .markdowner import to_html


class PageSerializer(serializers.ModelSerializer):
    uuid = serializers.CharField(read_only=True)
    html = serializers.SerializerMethodField(read_only=True)
    folder_name = serializers.SerializerMethodField(read_only=True)
    folder_pages = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Page
        fields = ('uuid', 'title', 'body', 'html', 'updated_at', 'folder_field', 'folder_name', 'folder_pages')

    def get_html(self, obj):
        return to_html(obj.body)

    def get_folder_name(self, obj):
        return obj.folder_field.name

    def get_folder_pages(self, obj):
        pages = Page.objects.filter(folder_field=obj.folder_field)
        return [{'uuid': p.uuid, 'title': p.title} for p in pages]

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.body = validated_data.get('body', instance.body)
        instance.save()
        return instance


class FolderSerializer(serializers.ModelSerializer):
    uuid = serializers.CharField(read_only=True)

    class Meta:
        model = Folder
        fields = ('uuid', 'name', 'updated_at')
