var bgMusic = document.getElementById("bg-sound");
var clickFX = document.getElementById("click");

bgMusic.play();
bgMusic.volume = 0.1;

function FX(){
    clickFX.play();
    bgMusic.volume = 1.0;
}