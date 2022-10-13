Audio.prototype.stop = function () {
  this.pause();
  this.currentTime = 0;
};

function audioEvent(audio) {
  if (audio !== undefined) {
    audio.play();
  }
};

// function longAudioEvent(elem, start, audio, loop,) {
//   if (elem === start) {
//     audio.play();
//     audio.loop = loop;
//   }
// };

function longAudioEvent(elem, check) {
  if (check !== undefined) {
    elem.play();
    elem.loop = 10000;
  }
}

function gameSound(elem, start, audio, loop) {
  if (elem === start) {
    audio.play();
    audio.loop = loop;
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
