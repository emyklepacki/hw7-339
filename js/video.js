var video;

window.addEventListener("load", function() {
	video = document.getElementById("player1");

	video.loop = false
	video.autoplay = false
});

document.querySelector("#play").addEventListener("click", function() {
	video.volume = (document.getElementById("slider").value)/100;
	
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * .90;
	// log
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 1.10;
	// log
	console.log(video.playbackRate);
});

document.querySelector("#slider").addEventListener("input", function() {
	video.volume = (document.getElementById("slider").value)/100;
});

document.querySelector("#skip").addEventListener("click", function() {
	let time = video.currentTime + 10;
	if (time > video.seekable.end(0)){
		video.currentTime = 0;
	}
	else {
		video.currentTime = time;
	}
	// log
	console.log(video.currentTime);
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.className = "oldSchool";
});

document.querySelector("#orig").addEventListener("click", function() {
	video.className = "video";
});

document.querySelector("#mute").addEventListener("click", function() {
	video.muted = !video.muted;
	if (document.querySelector('#mute').innerHTML == 'Mute'){
		document.querySelector('#mute').innerHTML = 'Unmute'
	} else {
		document.querySelector('#mute').innerHTML = 'Mute'
	}
});
