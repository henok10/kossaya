# Generated by Django 4.1.3 on 2023-03-11 00:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('listings', '0011_transaction_transactiondetail'),
    ]

    operations = [
        migrations.AddField(
            model_name='listing',
            name='alamat',
            field=models.TextField(blank=True, null=True),
        ),
    ]
