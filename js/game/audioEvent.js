Audio.prototype.stop = function () {
  this.pause();
  this.currentTime = 0;
};

function audioEvent(audio) {
  if (audio !== undefined) {
    audio.play();
  }
};

function backgroundAudio(elem, check) {
  if (check !== undefined) {
    elem.play();
    elem.loop = 10000;
  }
}

function stopAllSounds(elem) {
  const allAudio = document.querySelectorAll('audio');
  if (elem === true) {
    for (let i = 0; i < allAudio.length; i++) {
      allAudio[i].stop();
    }
  }
}
