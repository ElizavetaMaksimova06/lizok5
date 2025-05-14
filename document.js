const slider = document.getElementById('languageSlider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const modal = document.getElementById('videoModal');
const videoFrame = document.getElementById('videoFrame');
const closeModal = document.querySelector('.close-modal');
const videoPreviews = document.querySelectorAll('.video-preview');

// Calculate the width of slides for positioning
const slideWidth = slides[0].offsetWidth + 20; // slide width + margin
let position = 0;
const visibleSlides = Math.floor(slider.offsetWidth / slideWidth);
const maxPosition = slides.length - visibleSlides;

// Next button click handler
nextBtn.addEventListener('click', () => {
    if (position < maxPosition) {
        position++;
        updateSliderPosition();
    } else {
        // Loop back to the beginning
        position = 0;
        updateSliderPosition();
    }
});

// Previous button click handler
prevBtn.addEventListener('click', () => {
    if (position > 0) {
        position--;
        updateSliderPosition();
    } else {
        // Loop to the end
        position = maxPosition;
        updateSliderPosition();
    }
});

// Update slider position
function updateSliderPosition() {
    slider.style.transform = `translateX(-${position * slideWidth}px)`;
}

// Video preview click handlers
videoPreviews.forEach(preview => {
    preview.addEventListener('click', () => {
        const language = preview.getAttribute('data-lang');
        openVideoModal(language);
    });
});

// Open video modal
function openVideoModal(language) {
    // In a real application, you would set the appropriate video source
    // For this example, we'll just show a placeholder
    videoFrame.innerHTML = `
        <div style="background-color: #000; color: #fff; height: 100%; display: flex; justify-content: center; align-items: center; flex-direction: column;">
            <h2>Preview: ${language.charAt(0).toUpperCase() + language.slice(1)} Language</h2>
            <p>Video preview would play here</p>
        </div>
    `;
    
    modal.style.display = 'flex';
    
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
}

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    videoFrame.innerHTML = '';
    
    // Re-enable body scrolling
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside content
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        videoFrame.innerHTML = '';
        document.body.style.overflow = 'auto';
    }
});

// Initialize the slider
window.addEventListener('resize', () => {
    // Recalculate visible slides on window resize
    const visibleSlides = Math.floor(slider.offsetWidth / slideWidth);
    const maxPosition = slides.length - visibleSlides;
    
    // Reset position if needed
    if (position > maxPosition) {
        position = maxPosition;
        updateSliderPosition();
    }
});

// Auto slider (optional)
let autoSlide = setInterval(() => {
    if (position < maxPosition) {
        position++;
    } else {
        position = 0;
    }
    updateSliderPosition();
}, 5000);

// Pause auto slider on hover
slider.addEventListener('mouseenter', () => {
    clearInterval(autoSlide);
});

// Resume auto slider after hover
slider.addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => {
        if (position < maxPosition) {
            position++;
        } else {
            position = 0;
        }
        updateSliderPosition();
    }, 5000);
});