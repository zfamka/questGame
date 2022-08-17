const setting = document.querySelector('.setting');
const settings = document.querySelector('.settings');
const menu = document.querySelector('.container');
const volumeRange = document.getElementById('volume');
const allAudio = document.querySelectorAll('audio');

volumeRange.oninput = () => {
  console.log(volumeRange.value)
  allAudio.forEach(elem => {
    elem.volume = volumeRange.value;
  });
};

setting.addEventListener('click', () => {
  menu.style.display = 'none';
  settings.style.display = 'flex'
});


