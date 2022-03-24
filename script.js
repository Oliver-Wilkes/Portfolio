const faders = document.querySelectorAll('.fade-in')




// Get the video
var video = document.getElementById("myVideo");
// video.playbackRate = 0.8;


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





// Fade-in sections

const appearOptions = {
  threshold: 0.6,
  // rootMargin: "0 0 -100px 0"
};
const appearOnScroll = new IntersectionObserver 
(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
     } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});