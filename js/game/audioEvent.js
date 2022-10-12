Audio.prototype.stop = function () {
  this.pause();
  this.currentTime = 0;
};

function audioEvent(audio) {
  if (audio !== undefined) {
    audio.play();
  }
};

function longAudioEvent(elem, start, stop, audio, loop) {
  const allAudio = document.querySelectorAll('audio');
  if (elem === start) {
    for (let i = 0; i < allAudio.length; i++) {
      allAudio[i].stop();
    }
    audio.play();
    audio.loop = loop;
  } else if (elem === stop) {
    audio.stop();
  }
};
