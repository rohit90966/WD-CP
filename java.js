document.querySelector('.next-btn').addEventListener('click', () => {
    const carousel = document.querySelector('.image-carousel');
    const totalImages = document.querySelectorAll('.hero-image').length;
    const currentScroll = carousel.scrollLeft;
    const newScroll = currentScroll + window.innerWidth;

    if (newScroll < carousel.scrollWidth) {
        carousel.scrollLeft = newScroll;
    }
});

document.querySelector('.prev-btn').addEventListener('click', () => {
    const carousel = document.querySelector('.image-carousel');
    const newScroll = carousel.scrollLeft - window.innerWidth;

    if (newScroll >= 0) {
        carousel.scrollLeft = newScroll;
    }
});

// Auto scroll every 5 seconds
setInterval(() => {
    const carousel = document.querySelector('.image-carousel');
    const totalImages = document.querySelectorAll('.hero-image').length;
    const currentScroll = carousel.scrollLeft;
    const newScroll = currentScroll + window.innerWidth;

    if (newScroll < carousel.scrollWidth) {
        carousel.scrollLeft = newScroll;
    } else {
        carousel.scrollLeft = 0; // Reset to first image if it reaches the end
    }
}, 5000);

document.addEventListener("scroll", () => {
    const content = document.querySelector(".content");
    const scrollY = window.scrollY;
  
    if (scrollY > 50) {
      content.style.animation = "fade-in 1s forwards ease-out";
    }
  });
  


//   footer
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  