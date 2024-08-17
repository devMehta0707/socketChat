var swiper = new Swiper("#first_banner", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".fa-angle-right",
        prevEl: ".fa-angle-left",
    },
});

var swiper = new Swiper("#categori_slider", {
    slidesPerView: 2,
    spaceBetween: 0,
    freeMode: true,
    cssMode: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".fa-angle-right",
        prevEl: ".fa-angle-left",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        }, 767: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        }, 1320: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },
});
var swiper = new Swiper("#selling_slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    freeMode: true,
    cssMode: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".fa-angle-right",
        prevEl: ".fa-angle-left",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 8,
        }, 767: {
            slidesPerView: 3,
            spaceBetween: 8,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 10,
        }, 1320: {
            slidesPerView: 5,
            spaceBetween: 15,
        },
    },
});

var swiper = new Swiper("#cd_slider", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    },
});