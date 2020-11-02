const element = document.querySelector(".chin-chan");
const audio = new Audio("sources/chin-chan-chon-chi.mp3");

const myAudioPlay = function () {
	audio.play();
};

const myAudioPause = function () {
	audio.pause();
};

element.addEventListener("mouseover", myAudioPlay);
element.addEventListener("mouseout", myAudioPause);