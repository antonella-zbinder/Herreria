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
function toggleComparar(elemento) {
    const despues = elemento.querySelector('.despues');
    despues.style.opacity = (despues.style.opacity === "1") ? "0" : "1";
}

// Efecto Hover PC
document.querySelectorAll('.comparador').forEach(item => {
    item.addEventListener('mouseenter', () => item.querySelector('.despues').style.opacity = "1");
    item.addEventListener('mouseleave', () => item.querySelector('.despues').style.opacity = "0");
});