// The location of The Piggery
const Piggery = { lat: 51.191490, lng: -2.636926 };
// The map, centered at The Piggery
const map = new google.maps.Map(document.getElementById("map"), {
  zoom: 18,
  center: Piggery,
  mapTypeId: 'hybrid'
}); 


  const marker = new google.maps.Marker({
    position: Piggery,
    map: map,

    
  });



  // Bootstap carousel function for project images
$('#carousel-1').carousel({
  interval: false,
  ride: false
})