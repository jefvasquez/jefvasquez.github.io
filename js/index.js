const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $backward = document.querySelector("#backward");
const $forward = document.querySelector("#forward");
const $progressbar = document.querySelector('#progress')

$play.addEventListener("click", handlePlay);
$pause.addEventListener("click", handlePause);
$backward.addEventListener("click", handleBackward);
$forward.addEventListener("click", handleForward);
$video.addEventListener('loadedmetadata', handleLoaded);
$video.addEventListener('timeupdate', handleTimeUpdate);
$progressbar.addEventListener('input', handleInput);


function handlePlay() {
  $play.hidden = true;
  $pause.hidden = false;

  $video.play();
}

function handlePause() {
  $play.hidden = false;
  $pause.hidden = true;

  $video.pause();
}

function handleBackward() {
  $video.currentTime = $video.currentTime - 10;
}

function handleForward() {
  $video.currentTime = $video.currentTime + 10;
}

function handleLoaded() {
  $progressbar.max = $video.duration
}

function handleTimeUpdate() {
  $progressbar.value = $video.currentTime
}

function handleInput() {
  $video.currentTime = $progressbar.value
}
