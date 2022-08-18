const setting = document.querySelector('.setting');
const settings = document.querySelector('.settings');
const menu = document.querySelector('.container');
const volumeRange = document.getElementById('volume');
const allAudio = document.querySelectorAll('audio');


volumeRange.oninput = () => {
  localStorage.setItem('volume', volumeRange.value);
  allAudio.forEach(elem => {
    elem.volume = localStorage.getItem('volume');
  });
};

setting.addEventListener('click', () => {
  menu.style.display = 'none';
  settings.style.display = 'flex'
});


