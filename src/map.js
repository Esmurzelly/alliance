import locationMarker from './assets/img/location-marker.svg';
let center = [41.874902, -88.017996];

const init = () => {
  let map = new ymaps.Map('map', {
    center,
    zoom: 13,
  });

  let placemark = new ymaps.Placemark(center, {}, {
    iconLayout: 'default#image',
    iconImageHref: locationMarker,
    iconImageSize: [40, 40],
    iconImageOffset: [0, 0],
  });

  map.controls.remove('geolocationControl');
  map.controls.remove('searchControl');
  map.controls.remove('trafficControl');
  map.controls.remove('typeSelector');
  map.controls.remove('fullscreenControl');
  map.controls.remove('zoomControl');
  map.controls.remove('rulerControl');

  map.geoObjects.add(placemark);
};

ymaps.ready(init);