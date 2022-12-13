const swiper = new Swiper('.swiperr', {
    // Optional parameters
    slidesPerView: 6,
    spaceBetween: 49,
    slidesPerGroup: 2,
    loopFillGroupWithBlank: true,


    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-nextr',
        prevEl: '.swiper-button-prevr',
    },

    breakpoints: {
        // when window width is <= 499px
        1200: {
            slidesPerView: 6,
            spaceBetweenSlides: 30,
            slidesPerGroup: 2,
        },
        992: {
            slidesPerView: 4,
            spaceBetweenSlides: 30,
            slidesPerGroup: 2,
        },
        768: {
            slidesPerView: 3,
            spaceBetweenSlides: 20,
            slidesPerGroup: 3,
        },
        400: {
            slidesPerView: 2,
            spaceBetweenSlides: 20,
            slidesPerGroup: 2,
        },
        1: {
            slidesPerView: 1,
            spaceBetweenSlides: 20,
            slidesPerGroup: 1,
        },
    }
});


const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    slidesPerView: 4,
    spaceBetween: 15,
    slidesPerGroup: 2,
    loopFillGroupWithBlank: true,



    // Navigation arrows
    navigation: {
        nextEl: '.mynext1',
        prevEl: '.myprev1',
    },

    breakpoints: {
        // when window width is <= 499px
        1200: {
            slidesPerView: 4,
            slidesPerGroup: 2,
        },
        992: {
            slidesPerView: 3,
            slidesPerGroup: 2,
        },
        768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        400: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        1: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
    }
});



const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    slidesPerView: 4,
    spaceBetween: 15,
    slidesPerGroup: 2,
    loopFillGroupWithBlank: true,



    // Navigation arrows
    navigation: {
        nextEl: '.mynext2',
        prevEl: '.myprev2',
    },

    breakpoints: {
        // when window width is <= 499px
        1200: {
            slidesPerView: 4,
            slidesPerGroup: 2,
        },
        992: {
            slidesPerView: 3,
            slidesPerGroup: 2,
        },
        768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        400: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        1: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
    }
});



var swiper3 = new Swiper(".swiper3", {
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination3",
        clickable: true,
    },
});



new WOW().init();
