const setting = document.querySelector('.setting');
const settings = document.querySelector('.settings');
const menu = document.querySelector('.container');
const volumeRange = document.getElementById('volume');
const allAudio = document.querySelectorAll('audio');

volumeRange.oninput = () => {
  allAudio.forEach(elem => {
    if (volumeRange.value == 10) {
      elem.volume = 1;
    } else if (volumeRange.value == 9) {
      elem.volume = 0.9;
    } else if (volumeRange.value == 8) {
      elem.volume = 0.8;
    } else if (volumeRange.value == 7) {
      elem.volume = 0.7;
    } else if (volumeRange.value == 6) {
      elem.volume = 0.6;
    } else if (volumeRange.value == 5) {
      elem.volume = 0.5;
    } else if (volumeRange.value == 4) {
      elem.volume = 0.4;
    } else if (volumeRange.value == 3) {
      elem.volume = 0.3;
    } else if (volumeRange.value == 2) {
      elem.volume = 0.2;
    } else if (volumeRange.value == 1) {
      elem.volume = 0.1;
    } else if (volumeRange.value == 0) {
      elem.volume = 0;
    }
  });
}

setting.addEventListener('click', () => {
  menu.style.display = 'none';
  settings.style.display = 'flex'
});


