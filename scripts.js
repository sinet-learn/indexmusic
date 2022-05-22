document.addEventListener("click", play);
var audio = document.getElementById("audio");
var isPlaying = false;

function play() {
    audio.volume = 1;
    isPlaying ? audio.pause() : audio.play();
  };
  
  audio.onplaying = function() {
    isPlaying = true;
  };
  audio.onpause = function() {
    isPlaying = false;
  };
