// Функция для показа выбранного языка
function showLanguage(language) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.style.display = 'none');

    const selectedSlide = document.getElementById(language);
    selectedSlide.style.display = 'block';
}

// Функция для проверки ответа
function checkAnswer(language, answer) {
    let correctAnswer;
    let resultElement;

    if (language === 'english') {
        correctAnswer = 'a';
        resultElement = document.getElementById('english-result');
    } else if (language === 'spanish') {
        correctAnswer = 'b';
        resultElement = document.getElementById('spanish-result');
    } else if (language === 'french') {
        correctAnswer = 'b';
        resultElement = document.getElementById('french-result');
    }

    if (answer === correctAnswer) {
        resultElement.textContent = 'Правильно!';
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = 'Неправильно. Попробуйте еще раз.';
        resultElement.style.color = 'red';
    }
}

// Функция для перехода к следующему слайду
function nextSlide(language) {
    showLanguage(language);
}

// Функция для завершения урока
function finishLesson() {
    alert('Поздравляем! Вы завершили урок.');
}
