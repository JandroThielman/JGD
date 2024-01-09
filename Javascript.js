var bgMusic = document.getElementById("bg-sound");
var clickFX = document.getElementById("click");

bgMusic.play();
bgMusic.volume = 0.1;

function FX(){
    clickFX.play();
    bgMusic.volume = 1.0;
}

var img = document.getElementById('proj-img-01');
var description = document.getElementById('proj-description01');

function jp1i1() {
    img.style.zIndex = "2";
    description.style.zIndex = "-1";
}

function jp1d1() {
    description.style.zIndex = "2";
    img.style.zIndex = "-1";
}

var img1 = document.getElementById('proj-img-02');
var description1 = document.getElementById('proj-description02');

function jp2i1() {
    img1.style.zIndex = "2";
    description1.style.zIndex = "-1";
}

function jp2d1() {
    description1.style.zIndex = "2";
    img1.style.zIndex = "-1";
}

var img2 = document.getElementById('proj-img-03');
var description2 = document.getElementById('proj-description03');

function jp3i1() {
    img2.style.zIndex = "2";
    description2.style.zIndex = "-1";
}

function jp3d1() {
    description2.style.zIndex = "2";
    img2.style.zIndex = "-1";
}