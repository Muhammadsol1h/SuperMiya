const swiper = new Swiper('.swiper-container', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
    },

    breakpoints: {
        480: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1400: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
});
