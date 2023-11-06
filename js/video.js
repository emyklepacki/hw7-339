var video = document.getElementById("player1");

window.addEventListener("load", function() {
	document.getElementById("player1").load();
});

document.querySelector("#play").addEventListener("click", () =>{
	document.querySelector("video").play();
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});

