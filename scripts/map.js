ymaps.ready(init);
var myMap, myPlacemark;

function init() {   
    // Создает экземпляр карты и привязывает его к созданному контейнеру
    myMap = new ymaps.Map("map", {
        center: [59.94, 30.31],
        zoom: 12,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    myPlacemark1 = new ymaps.Placemark(
      [59.97, 30.31],
      {},
      {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/map-marker.svg',
        iconImageSize: [46, 57],
        iconImageOffset: [-23, -57]
      }
    );

    myPlacemark2 = new ymaps.Placemark(
      [59.95, 30.39],
      {},
      {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/map-marker.svg',
        iconImageSize: [46, 57],
        iconImageOffset: [-23, -57]
      }      
    );

    myPlacemark3 = new ymaps.Placemark(
      [59.92, 30.49],
      {},
      {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/map-marker.svg',
        iconImageSize: [46, 57],
        iconImageOffset: [-23, -57]
      }      
    );

    myPlacemark4 = new ymaps.Placemark(
      [59.89, 30.31],
      {},
      {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/map-marker.svg',
        iconImageSize: [46, 57],
        iconImageOffset: [-23, -57]
      }      
    );

    myMap.geoObjects
      .add(myPlacemark1)
      .add(myPlacemark2)
      .add(myPlacemark3)
      .add(myPlacemark4);
}