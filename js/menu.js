
// Menu
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".menu-bottom__btn").forEach(item => {
  item.addEventListener("click", function() {
    let btn = this;
    let dropdown = this.parentElement.querySelector(".submenu");

    document.querySelectorAll(".menu-bottom__btn").forEach(el => {
      if (el != btn) {
        el.classList.remove("active--btn");
      }
    });

    document.querySelectorAll(".submenu").forEach(el => {
      if (el != dropdown) {
        el.classList.remove("active-list--item");
      }
    })
    dropdown.classList.toggle("active-list--item");
    btn.classList.toggle("active--btn")
  })
})

document.addEventListener("click", function(e) {
  let target = e.target;
  if (!target.closest(".menu-bottom__list")) {
    document.querySelectorAll(".submenu").forEach(el => {
        el.classList.remove("active-list--item");
    })
     document.querySelectorAll(".menu-bottom__btn").forEach(el => {
        el.classList.remove("active--btn");
    });
  }
})
})


new SimpleBar(document.querySelector(".nav__sublist"), {
  /* чтобы изначально ползунок был виден */
  autoHide: false,
  /* с помощью этого значения вы можете управлять высотой ползунка*/
  scrollbarMaxSize: 25,
});

new SimpleBar(document.querySelector(`[data-path="2"]`), {
  /* чтобы изначально ползунок был виден */
  autoHide: false,
  /* с помощью этого значения вы можете управлять высотой ползунка*/
  scrollbarMaxSize: 25,
});

new SimpleBar(document.querySelector(`[data-path="3"]`), {
  /* чтобы изначально ползунок был виден */
  autoHide: false,
  /* с помощью этого значения вы можете управлять высотой ползунка*/
  scrollbarMaxSize: 25,
});

new SimpleBar(document.querySelector(`[data-path="4"]`), {
  /* чтобы изначально ползунок был виден */
  autoHide: false,
  /* с помощью этого значения вы можете управлять высотой ползунка*/
  scrollbarMaxSize: 25,
});

new SimpleBar(document.querySelector(`[data-path="5"]`), {
  /* чтобы изначально ползунок был виден */
  autoHide: false,
  /* с помощью этого значения вы можете управлять высотой ползунка*/
  scrollbarMaxSize: 25,
});
// Burger
window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#burger').addEventListener('click', function(){
    document.querySelector('#top__menu').classList.remove('not-active')
    document.querySelector('#top__menu').classList.toggle('is-active')
    document.querySelector('#scroll').classList.add('is-active')

    })
})
window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#cross-icon').addEventListener('click', function(){
    document.querySelector('#top__menu').classList.remove('is-active')
    document.querySelector('#top__menu').classList.toggle('not-active')
    document.querySelector('#scroll').classList.remove('is-active')
  })
})

window.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll(".nav__link").forEach(function(navLink){
    navLink.addEventListener('click', function(){
      document.querySelector('#top__menu').classList.remove('is-active')
      document.querySelector('#top__menu').classList.toggle('not-active')
      document.querySelector('#scroll').classList.remove('is-active')
    })
  })

})

// Search
window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#header__search').addEventListener('click', function(){
    document.querySelector('#header__search').classList.add('is-active')
    document.querySelector('#header__form').classList.add('is-active')
    document.querySelector('#form__input').classList.add('is-active')
    document.querySelector('#form__button').classList.add('is-active')
    document.querySelector('#form__cross-icon').classList.remove('not-active')
    document.querySelector('#form__cross-icon').classList.add('is-active')

    })
})
window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#form__cross-icon').addEventListener('click', function(){
    document.querySelector('#header__form').classList.remove('is-active')
    document.querySelector('#form__input').classList.remove('is-active')
    document.querySelector('#form__button').classList.remove('is-active')
    document.querySelector(".form__cross-icon").classList.remove('is-active')
    document.querySelector(".form__cross-icon").classList.add('not-active')
    document.querySelector('#header__search').classList.remove('is-active')

  })
})


