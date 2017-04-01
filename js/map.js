// When you add a marker using a Place instead of a location, the Maps API will
// automatically add a 'Save to Google Maps' link to any info window associated
// with that marker.

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    //center: {lat: -33.8666, lng: 151.1958}
    center: {lat: 24.137421, lng: 120.686649}
  });

  var marker = new google.maps.Marker({
    map: map,
    // Define the place with a location, and a query string.
    place: {
      location: {lat: 24.137421, lng: 120.686649},
      query: '台中火車站'

    },
    // Attributions help users find your site again.
    attribution: {
      source: 'Google Maps JavaScript API',
      webUrl: 'https://developers.google.com/maps/'
    }
  });

  // Construct a new InfoWindow.
  var infoWindow = new google.maps.InfoWindow({
    content: '台中火車站'
  });

  // Opens the InfoWindow when marker is clicked.
  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });
}