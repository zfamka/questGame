const allAudio = document.querySelectorAll('audio')
const volume = localStorage.getItem('volume');
allAudio.forEach(elem => {
  elem.volume = volume;
  if(volume === null) {
    elem.volume = '0.5';
  }
})

//local storage @settings.js ------