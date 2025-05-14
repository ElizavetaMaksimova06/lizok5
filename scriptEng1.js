// Ожидание загрузки контента страницы
document.addEventListener('DOMContentLoaded', function () {
    // Обработчик события для кнопки "Заниматься сейчас"
    const startBtn = document.getElementById('startBtn');
    startBtn.addEventListener('click', function() {
      alert('Вы начали занятия! Удачи в изучении английского!');
      // Можно перенаправить на первый урок или выполнить другие действия:
      window.location.href = 'present-simple.html'; // Пример перенаправления на урок 1
    });
  });
  