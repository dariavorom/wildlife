const arrowPrev = document.querySelector(".arrow_prev"),
    arrowNext = document.querySelector(".arrow_next"),
    slider = document.querySelector(".slider");
    slides = document.querySelectorAll(".photo_inner-item");

const nextSlide = () => {
    slider.appendChild(slider.firstElementChild);
}
const prevSlide = () => {
    slider.prepend(slider.lastElementChild);
}
arrowNext.addEventListener('click', (e) => {
    e.preventDefault();
    nextSlide();
});
arrowPrev.addEventListener('click', (e) => {
    e.preventDefault();
    prevSlide();
});