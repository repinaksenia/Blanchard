document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.tabs_btn').forEach(function(TabBtn) {
    TabBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      console.log(path)
      document.querySelectorAll('.tab-content').forEach(function(tabContent) {
        console.log(tabContent)
        tabContent.classList.remove('tab-active')

      })
      // document.querySelectorAll('.tab_btn').forEach(function(TabBtnColor){
      //   TabBtnColor.classList.remove('tab_color')
      // })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-active')
      // document.querySelector(`[data-path="${path}"]`).classList.add('tab_color')
    })
  })
})

document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.accordion__link').forEach(function(tab) {
    tab.addEventListener('click', function(event) {
      const path1 = event.currentTarget.dataset.path
      console.log(path1)
      document.querySelectorAll('.tab-content__left').forEach(function(content) {
        console.log(content)
        content.classList.remove('author-active')

      })
      // document.querySelectorAll('.tab_btn').forEach(function(TabBtnColor){
      //   TabBtnColor.classList.remove('tab_color')
      // })
      document.querySelector(`[data-target="${path1}"]`).classList.add('author-active')
      // document.querySelector(`[data-path="${path}"]`).classList.add('tab_color')
    })
  })
})

document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.accordion__top').forEach(function(top) {
    top.addEventListener('click', function(eventOpen) {
      const path2 = eventOpen.currentTarget.dataset.path
      document.querySelectorAll('.accordion__top').forEach(function(accordionTop) {
        console.log(accordionTop)
        accordionTop.classList.remove('is-open')
        accordionTop.classList.add('not-open')
      })
      document.querySelector(`[data-path="${path2}"]`).classList.remove('not-open')
      document.querySelector(`[data-path="${path2}"]`).classList.add('is-open')
    })
  })
})

$( function() {
  $( "#accordion1" ).accordion({
    heightStyle: "content"
   });

} );

$( function() {
  $( "#accordion2" ).accordion({
    heightStyle: "content"
   });

} );

$( function() {
  $( "#accordion3" ).accordion({
    heightStyle: "content"
   });

} );

$( function() {
  $( "#accordion4" ).accordion({
    heightStyle: "content"
   });

} );

$( function() {
  $( "#accordion5" ).accordion({
    heightStyle: "content"
   });
  });

// Setter
// $( ".accordion__item" ).accordion( "option", "heightStyle", "content" );


