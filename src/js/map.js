export default function Map () {
  if (!window.ymaps)
    return;

  ymaps.ready(init);

  function init () {
    const Map = new ymaps.Map("map", {
      center: [55.683021, 37.618435],
      zoom: 15,
      controls: [],
      type: 'yandex#map',
    },
    {
      autoFitToViewport: 'always',
      suppressMapOpenBlock: true,
      yandexMapAutoSwitch: false,
    });

    
    createBalloon(Map);
  }

  function createBalloon (Map) {
    let markerSize = 32,
        markerSizeActive = 80,
        balloonContent = `
        <p class="contacts__map-balloon-header">Москва</p>
        <a class="contacts__map-balloon-link" href="mailto:team@x-guide.ru">Email: team@x-guide.ru</a>
        <a class="contacts__map-balloon-link" href="tel:+79991550470">Tel: 8 999 155-04-70</a>
        <p class="contacts__map-balloon-text">117105, Россия, г.Москва, Варшавское шоссе, д.28 A.</p>`;


    let placemark = new ymaps.Placemark([55.683021, 37.618435], {
      // Зададим содержимое основной части балуна.
      balloonContentBody: balloonContent,
    },
    {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: '../img/map-marker.svg',
      // Размеры метки.
      iconImageSize: [markerSize, markerSize],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [markerSize / -2, markerSize / -2],
      hideIconOnBalloonOpen: false,
      balloonOffset: [0, -40],
    });
    // Добавим метку на карту.
    Map.geoObjects.add(placemark);

    // Меняем размер активной метки
    placemark.events.add('balloonopen', function() {
      placemark.options.set('iconImageSize', [markerSizeActive, markerSizeActive]);
      placemark.options.set('iconImageOffset', [markerSizeActive / -2, markerSizeActive / -2]);
    });
    placemark.events.add('balloonclose', function() {
      placemark.options.set('iconImageSize', [markerSize, markerSize]);
      placemark.options.set('iconImageOffset', [markerSize / -2, markerSize / -2]);
    });
    
    // Закрывае балун при клике на карту
    Map.events.add('click', function() {
      placemark.balloon.close();
    });

    // Откроем балун на метке.
    placemark.balloon.open();
  }
}