// Индекс текущего слайда
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');

// Функция для отображения информации о языке
function showLanguageDetails(language) {
    alert('Теперь вы можете начать изучать ' + language);
}

// Функция для переключения на следующий слайд
function nextSlide() {
    if (currentSlideIndex < slides.length - 1) {
        slides[currentSlideIndex].style.display = 'none';
        currentSlideIndex++;
        slides[currentSlideIndex].style.display = 'block';
    }
}

// Функция для переключения на предыдущий слайд
function previousSlide() {
    if (currentSlideIndex > 0) {
        slides[currentSlideIndex].style.display = 'none';
        currentSlideIndex--;
        slides[currentSlideIndex].style.display = 'block';
    }
}
