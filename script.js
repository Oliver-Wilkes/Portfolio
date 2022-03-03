// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}



// Bootstap carousel function for project images
$('#carousel-1, #carousel-2').carousel({
  interval: false,
  ride: false
})



// $(document).ready(function(){
// 	$('#carousel-1, #carousel-2').carousel({
//     ride: false,
// 		keyboard: false,
// 		pause: hover
// 	});
// })