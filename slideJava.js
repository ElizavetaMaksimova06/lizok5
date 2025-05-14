const slider = document.getElementById('languageSlider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let position = 0;

// Вычисляем ширину одного слайда
const slideWidth = slides[0].offsetWidth + 20; // учитываем отступы между слайдами
const sliderWidth = slider.offsetWidth;
const totalSlides = slides.length;
const maxPosition = Math.ceil(totalSlides - Math.floor(sliderWidth / slideWidth)); // Обновляем максимальную позицию

// Функция для обновления позиции слайдера
function updateSliderPosition() {
    slider.style.transform = `translateX(-${position * slideWidth}px)`;
}

// Обработчик нажатия на кнопку "Вперед"
nextBtn.addEventListener('click', () => {
    if (position < maxPosition) {
        position++;
    } else {
        position = 0; // Сброс на первый слайд
    }
    updateSliderPosition();
});

// Обработчик нажатия на кнопку "Назад"
prevBtn.addEventListener('click', () => {
    if (position > 0) {
        position--;
    } else {
        position = maxPosition; // Переход к последнему слайду
    }
    updateSliderPosition();
});

// Обновляем размеры слайдов при изменении размера окна
window.addEventListener('resize', () => {
    const slideWidth = slides[0].offsetWidth + 20; // пересчитываем ширину слайда
    const sliderWidth = slider.offsetWidth;
    const maxPosition = Math.ceil(totalSlides - Math.floor(sliderWidth / slideWidth));
    
    if (position > maxPosition) {
        position = maxPosition; // ограничиваем перемещение слайдов
    }
    updateSliderPosition();
});
