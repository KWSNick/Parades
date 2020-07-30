$("document").ready(function () {
    let abstractHeight = $("#abstract").innerHeight();
    $("#map").css({height: abstractHeight});
    $(window).resize(function () {
        let abstractHeight = $("#abstract").innerHeight();
        $("#map").css({height: abstractHeight});
  });
});

function initMap() {
  let shop = { lat: 51.432297, lng: -0.510525 };
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: shop,
  });

  let iconBase = '../images/';

  let icons = {
      shop: {
          icon: iconBase + 'test_icon.png'
      }
  };

  let shopMarker = new google.maps.Marker({
    position: shop,
    icon: { path: icons[shop].icon },
    map: map,
  });
  let busStation = { lat: 51.432559, lng: -0.509132 };
  let trainStation = { lat: 51.432451, lng: -0.502975 };
  let busMarker = new google.maps.Marker({ 
      position: busStation, 
      icon: { path: google.maps.SymbolPath.CIRCLE, scale: 6, fillOpacity: 1.0, fillColor: 'red', strokeColor: 'red', strokeWeight: 2 },
      map: map });
  let trainMarker = new google.maps.Marker({
    position: trainStation,
    icon: { path: google.maps.SymbolPath.CIRCLE, scale: 6, fillOpacity: 1.0, fillColor: 'red', strokeColor: 'red', strokeWeight: 2 },
    map: map,
  });

  let carParks = [
    { lat: 51.432491, lng: -0.51067 },
    { lat: 51.431747, lng: -0.509558 },
    { lat: 51.432678, lng: -0.5125 },
    { lat: 51.433447, lng: -0.508576 },
    { lat: 51.433586, lng: -0.510752 },
  ];
  let markers = carParks.map(function (location, i) {
    return new google.maps.Marker({
      position: location,
      icon: { path: google.maps.SymbolPath.BACKWARD_OPEN_ARROW, scale: 6, strokeColor: 'red', strokeWeight: 2 },
      map: map,
    });
  });
}

// Tothill Multi Storey Car Park, South Street Car Park, Staines Riverside Underground Car Park, Elmsleigh Multi Storey Car Park, Elmsleigh Road Car Park
