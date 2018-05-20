window.onload = function () {
  // Создает экземпляр карты и привязывает его к созданному контейнеру
  var map = new YMaps.Map(document.getElementById("map"));
  
  // Устанавливает начальные параметры отображения карты: центр карты и коэффициент масштабирования
  map.setCenter(new YMaps.GeoPoint(30.31, 59.94), 10);
};