# Generated by Django 2.1.5 on 2019-01-23 14:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [("boards", "0001_initial")]

    operations = [
        migrations.AddField(
            model_name="topic",
            name="views",
            field=models.PositiveIntegerField(default=0),
        )
    ]
