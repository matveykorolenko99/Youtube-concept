const swiper = new Swiper('.channel-slider#first ', {
    // Optional parameters

    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        1900: {
            slidesPerView: 6

        },
        1600: {
            slidesPerView: 5
        },
        1300: {
            slidesPerView: 4
        },
        1100: {
            slidesPerView: 5
        },
        750: {
            slidesPerView: 2
        }
    },


    // Navigation arrows
    navigation: {
        nextEl: '.channel-button-next1',

        prevEl: '.channel-button-prev1',

    },



});

const swipers = new Swiper('.channel-slider#second ', {
    // Optional parameters

    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        1500: {
            slidesPerView: 3

        },


        900: {
            slidesPerView: 2
        }

    },
    // Navigation arrows
    navigation: {
        nextEl: '.channel-button-next2',

        prevEl: '.channel-button-prev2',

    },
});

const swiper3 = new Swiper('.channel-slider#third ', {
    // Optional parameters

    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        1900: {
            slidesPerView: 6

        },
        1600: {
            slidesPerView: 5
        },
        1300: {
            slidesPerView: 4
        },
        1100: {
            slidesPerView: 5
        },
        750: {
            slidesPerView: 2
        }
    },


    // Navigation arrows
    navigation: {
        nextEl: '.channel-button-next3',

        prevEl: '.channel-button-prev3',

    }

});
const searchBtn = document.querySelector('.mobile-search');
const mobileSearch = document.querySelector('.input-group');
searchBtn.addEventListener('click', () => {
    mobileSearch.classList.toggle('is-open')
});