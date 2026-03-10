// Inicializar Swiper
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoHeight: true,
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    breakpoints: { 1024: { slidesPerView: 2 } }
});

// Función Antes/Después
function toggleComparar(event, elemento) {
    const despues = elemento.querySelector('.despues');
    // Cambia la opacidad solo si el clic no fue en el video
    const video = elemento.querySelector('video');

    // Verifica si el clic fue en el video o en el botón de reproducción
    if (event.target !== video) {
        despues.style.opacity = (despues.style.opacity === "1") ? "0" : "1";
    }
}

// Agregar eventos a los comparadores
document.querySelectorAll('.comparador').forEach(comparador => {
    comparador.addEventListener('click', (event) => toggleComparar(event, comparador));
});

// Agregar un evento al video para evitar que el clic se propague
document.querySelectorAll('.video-container video').forEach(video => {
    video.addEventListener('click', function (event) {
        event.stopPropagation(); // Evita que el clic se propague al comparador
    });
});

// Efecto Hover PC
document.querySelectorAll('.comparador').forEach(item => {
    item.addEventListener('mouseenter', () => item.querySelector('.despues').style.opacity = "1");
    item.addEventListener('mouseleave', () => item.querySelector('.despues').style.opacity = "0");
});

const carouselTrack = document.querySelector('.carousel-track');
const carouselButtons = document.querySelectorAll('.carousel-button');
let currentIndex = 0;

carouselButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Obtenemos el ancho exacto y la separación dinámicamente desde el CSS
        const card = document.querySelector('.polaroid-card');
        const cardWidth = card.offsetWidth;
        const style = window.getComputedStyle(carouselTrack);
        const gap = parseFloat(style.gap) || 0;
        
        // El paso exacto que se tiene que mover el track
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
