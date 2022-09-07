const allAudio = document.querySelectorAll('audio')
const volume = localStorage.getItem('volume');
allAudio.forEach(elem => {
  elem.volume = volume;
})

//local storage @settings.js ------