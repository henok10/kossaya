# Generated by Django 4.1.7 on 2023-05-02 04:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('listings', '0039_remove_poi_listing'),
    ]

    operations = [
        migrations.AddField(
            model_name='listing',
            name='room_size',
            field=models.CharField(blank=True, max_length=150, null=True),
        ),
    ]
