var video = document.querySelector("video");

window.addEventListener("load", function() {
	document.querySelector("video").load();
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = 0.9;
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = 1.1;
});


