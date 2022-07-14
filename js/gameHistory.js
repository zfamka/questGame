const preHistory = document.querySelector('.preHistory');
const historySkip = document.querySelector('.next');
const mainContent = document.querySelector('.mainContent');
const gameAudio = document.querySelector('.game__audio');

historySkip.addEventListener('click', () => {
  preHistory.style.display = 'none';
  mainContent.style.display = 'block';
  gameAudio.play();
  gameAudio.loop = true;
})


