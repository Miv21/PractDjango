import base64
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.http import JsonResponse, HttpResponse
from .forms import CustomUserCreationForm, CustomAuthenticationForm
from .models import Card

def index(request):
    if not request.user.is_authenticated:
        print("Пользователь не аутентифицирован")  
        return redirect('login')  
    else:
        print("Аутентифицирован пользователь")  

    return render(request, 'main/pract2.html')

def register(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('index')
    else:
        form = CustomUserCreationForm()
    return render(request, 'main/register.html', {'form': form})

def user_login(request):
    if request.method == 'POST':
        form = CustomAuthenticationForm(request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('index')
        messages.error(request, "Invalid username or password")
    else:
        form = CustomAuthenticationForm()
    return render(request, 'main/login.html', {'form': form})

@login_required
def user_logout(request):
    logout(request)
    return redirect('index')

def card_list(request):
    """Возвращает список карточек с изображениями в формате Base64."""
    cards = Card.objects.all()
    data = []
    
    for card in cards:
        image_base64 = None
        if card.image:
            image_base64 = base64.b64encode(card.image).decode('utf-8')

        data.append({
            'id': card.id,
            'name': card.name,
            'description': card.description,
            'protein': card.protein,
            'fat': card.fat,
            'carbohydrates': card.carbohydrates,
            'energy': card.energy,
            'total_weight': card.total_weight,
            'image': f"data:image/jpeg;base64,{image_base64}" if image_base64 else None
        })
        
    return JsonResponse(data, safe=False)

def get_image(request, card_id):
    """Отдает изображение карточки по ID."""
    card = get_object_or_404(Card, id=card_id)

    if card.image:
        return HttpResponse(card.image, content_type="image/jpeg")  # Или "image/png"
    
    return HttpResponse("No image", status=404)

