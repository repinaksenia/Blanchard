ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        // center: [55.76376870476668,37.62833559426563],
        center: [55.75846806898367,37.60108849999989],
        controls: ['geolocationControl', 'zoomControl'],
        zoom: 14
    }, {
    //   // Зададим опции для элементов управления.
      geolocationControlFloat: 'right',
  });
    // Создание геообъекта с типом точка (метка).
    // var myGeoObject = new ymaps.GeoObject({
    //     geometry: {
    //     type: "Point", // тип геометрии - точка
    //     coordinates: [48.8721585335913, 2.35442382457164] // координаты точки
    //     }
    // });
    zoomControlObj = myMap.controls.get('zoomControl');
    zoomControlObj.options.set('size', 'small');
    // zoomControlObj.options.set('position', 'right', '10px', 'left', 'auto');


    var placemark = new ymaps.Placemark([55.75846806898367,37.60108849999989], {}, {
      iconLayout: 'default#image',
      iconImageHref: '../img/placemark.svg',
      iconImageSize: [20, 20]
      // iconImageOffset: [-3, -42]
    });

  //   myMap.controls.add('geolocationControl', {
  //     float: 'right',
  //     // Кнопка геолокации будет самой дальней
  //     // от левого угла.
  //     floatIndex: '100'
  // });


    // Размещение геообъекта на карте.
    // myMap.geoObjects.add(myGeoObject);
    myMap.geoObjects.add(placemark);
    // myMap.controls.remove('routeEditor');
    // myMap.controls.remove('zoomControl');
    // myMap.controls.remove('rulerControl');
    // myMap.controls.remove('routeButtonControl');

}
