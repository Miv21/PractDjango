from django.contrib import admin
from django import forms
from .models import Role, CustomUser, Card

@admin.register(Role)
class RoleAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)

@admin.register(CustomUser)
class CustomUserAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'role', 'is_staff', 'is_active')
    search_fields = ('username', 'email')
    list_filter = ('role', 'is_staff', 'is_active')

class CardAdminForm(forms.ModelForm):
    image_file = forms.ImageField(required=False)  # Поле для загрузки изображения

    class Meta:
        model = Card
        fields = '__all__'

    def save(self, commit=True):
        instance = super().save(commit=False)
        if self.cleaned_data['image_file']:
            instance.image = self.cleaned_data['image_file'].read()  # Конвертация в бинарные данные
        if commit:
            instance.save()
        return instance

@admin.register(Card)
class CardAdmin(admin.ModelAdmin):
    form = CardAdminForm
    list_display = ('name', 'protein', 'fat', 'carbohydrates', 'energy', 'total_weight')
    search_fields = ('name', 'description')
    list_filter = ('energy',)