document.addEventListener('DOMContentLoaded', function () {

    let heroSlider = new Swiper(".heroSwiper", {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        slidesPerView: 1,
        spaceBetween: 10,
    });

});