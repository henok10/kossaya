# Generated by Django 4.1.7 on 2023-05-02 03:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('listings', '0037_alter_transaction_rentalfrequency'),
    ]

    operations = [
        migrations.AddField(
            model_name='poi',
            name='listing',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='poi', to='listings.listing'),
        ),
    ]
