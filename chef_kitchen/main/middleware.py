from django.contrib.auth import logout
from django.utils import timezone

class AutoLogoutMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Проверяем, аутентифицирован ли пользователь
        if request.user.is_authenticated:
            # Обновляем время последней активности, преобразуя его в строку
            request.session['last_activity'] = timezone.now().isoformat()  # Преобразуем в строку

        response = self.get_response(request)
        return response