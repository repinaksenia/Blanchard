const poppers = document.querySelectorAll('.popper');

  // Pass the button, the tooltip, and some options, and Popper will do the
  // magic positioning for you:

  poppers.forEach(popper =>{
    const button = popper.querySelector('.marker');
    const tooltip = popper.querySelector('.popup');

  Popper.createPopper(button, tooltip, {
    placement: 'top',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 9],
          // element: arrow,
        },
      },
    ],

  });
});

//   function show() {
//     tooltip.setAttribute('data-show', '');

//     // We need to tell Popper to update the tooltip position
//     // after we show the tooltip, otherwise it will be incorrect
//     popperInstance.update();
//   }

//   function hide() {
//     tooltip.removeAttribute('data-show');
//   }

//   const showEvents = ['mouseenter', 'focus'];
//   const hideEvents = ['mouseleave', 'blur'];

//   showEvents.forEach((event) => {
//     button.addEventListener(event, show);
//   });

//   hideEvents.forEach((event) => {
//     button.addEventListener(event, hide);
//   });

// });
