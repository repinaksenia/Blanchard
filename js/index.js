const hero__swiper = new Swiper('.hero__swiper', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 2000,
  autoplay: {
    delay: 2000
  },
  effect: "fade",
  allowTouchMove: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: '.swiper-bullet-pagination',
    type: 'bullets',
    clickable: true
  }

})

const swiper = new Swiper('.gallery__wrapper', {
  // Optional parameters
  spaceBetween: 50,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
     pageUpDown: true,

  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    720: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 38
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 2,
      spaceBetween: 34
    },
    1920: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 50
    },
  },
  // If we need pagination
  pagination: {
    el: '.gallery__pagination',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.gallery__next',
    prevEl: '.gallery__prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const swiper__publication = new Swiper('.publication__right', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 50,
  autoHeight: true,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1
    },
    650: {
      slidesPerView: 1
    },
    // when window width is >= 480px
    768: {
      parallax: true,
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 34
    },
    // when window width is >= 640px
    1024: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 49
    },
    1920: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 50
    },
  },
  // If we need pagination
  pagination: {
    el: '.publication__pagination',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.publication__next',
    prevEl: '.publication__prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const swiper__projects = new Swiper('.projects__box', {
  // Optional parameters

  autoHeight: true,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerGroup: 1,
      slidesPerView: 1,
      spaceBetween: 0
    },
    // when window width is >= 480px
    768: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 34
    },
    // when window width is >= 640px
    1024: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 50
    },
    1920: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 50
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.projects__next',
    prevEl: '.projects__prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const swiper__event = new Swiper('.event__swiper-container', {

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerGroup: 1,
      slidesPerView: 1,
      spaceBetween: 0
    },
    // when window width is >= 480px
    768: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 34
    },
    // when window width is >= 640px
    1024: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 27
    },
    1920: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 50
    },
  },
  // If we need pagination
  pagination: {
    el: '.event__swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.event__next',
    prevEl: '.event__prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
