const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoHeight: true,
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    breakpoints: { 1024: { slidesPerView: 2 } }
});

function toggleComparar(event, elemento) {
    const despues = elemento.querySelector('.despues');
    const video = elemento.querySelector('video');

    if (event.target !== video) {
        despues.style.opacity = (despues.style.opacity === "1") ? "0" : "1";
    }
}

document.querySelectorAll('.comparador').forEach(comparador => {
    comparador.addEventListener('click', (event) => toggleComparar(event, comparador));
});

document.querySelectorAll('.video-container video').forEach(video => {
    video.addEventListener('click', function (event) {
        event.stopPropagation(); 
    });
});

document.querySelectorAll('.comparador').forEach(item => {
    item.addEventListener('mouseenter', () => item.querySelector('.despues').style.opacity = "1");
    item.addEventListener('mouseleave', () => item.querySelector('.despues').style.opacity = "0");
});

const carouselTrack = document.querySelector('.carousel-track');
const carouselButtons = document.querySelectorAll('.carousel-button');
let currentIndex = 0;

carouselButtons.forEach(button => {
    button.addEventListener('click', () => {
        const card = document.querySelector('.polaroid-card');
        const cardWidth = card.offsetWidth;
        const style = window.getComputedStyle(carouselTrack);
        const gap = parseFloat(style.gap) || 0;
        
        const step = cardWidth + gap;
        const maxIndex = carouselTrack.children.length - 1;

        if (button.classList.contains('left')) {
            currentIndex = Math.max(currentIndex - 1, 0);
        } else {
            currentIndex = Math.min(currentIndex + 1, maxIndex);
        }
        
        carouselTrack.style.transform = `translateX(-${currentIndex * step}px)`;
    });
});

