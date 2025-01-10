const heroSlide = document.querySelector('.hero-slide');
const heroImages = document.querySelectorAll('.hero-image');
let currentSlide = 0;
const numSlides = heroImages.length;

function showSlide(n) {
    if (n < 0) {
        n = numSlides - 1;
    } else if (n >= numSlides) {
        n = 0;
    }
    heroSlide.style.transform = `translateX(-${n * 100}%)`;
    currentSlide = n;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}