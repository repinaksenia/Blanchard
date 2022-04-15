// const container__hero = document.querySelector(".container")
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
  // direction: 'vertical',
  // slidesPerGroup: 6,
  // slidesPerView: 3,
  spaceBetween: 50,
  // loop: true,
  // autoHeight: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
     pageUpDown: true,

  },
  // slidesPerColumn: 2,

  // grid: {
  //   fill: 'row',
  //   rows: 2,
  // },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    720: {
      // slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 480px
    768: {
      // slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 38
    },
    // when window width is >= 640px
    1024: {
      // slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 34
    },
    // 1400: {
    //   // slidesPerGroup: 2,
    //   slidesPerView: 2,
    //   spaceBetween: 34
    // },
    // 1450: {
    //   // slidesPerGroup: 2,
    //   slidesPerView: 2,
    //   spaceBetween: 34
    // },
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
  // direction: 'vertical',
  // slidesPerGroup: 6,
  slidesPerView: 3,
  spaceBetween: 50,
  // loop: true,
  autoHeight: true,
  // slidesPerColumn: 2,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1
      // spaceBetween: 20
    },
    650: {
      slidesPerView: 1
    },
    // when window width is >= 480px
    768: {
      parallax: true,
      // slidesOffsetBefore: 27,
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
      // slidesPerGroup: 6,
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
  // direction: 'vertical',
  // slidesPerGroup: 3,
  slidesPerView: 1,
  spaceBetween: 50,
  // loop: true,
  autoHeight: true,
  // slidesPerColumn: 2,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    // when window width is >= 480px
    768: {
      // slidesPerGroup: 4,
      slidesPerView: 2,
      spaceBetween: 34
    },
    // when window width is >= 640px
    1024: {
      // slidesPerGroup: 4,
      slidesPerView: 2,
      spaceBetween: 50
    },
    1920: {
      // slidesPerGroup: 6,
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 50
    },
  },
  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  //   type: 'fraction',
  // },

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
  spaceBetween: 50,
  // loop: true,
  // autoHeight: true,
  // slidesPerColumn: 2,

  breakpoints: {
    // when window width is >= 320px
    320: {
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
    // type: 'fraction',
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
