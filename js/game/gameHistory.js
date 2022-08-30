const preHistory = document.querySelector('.preHistory');
const historySkip = document.querySelector('.next');
const mainContent = document.querySelector('.mainContent');
const gameAudio = document.querySelector('.game__audio');
const startGameTingle = document.querySelector('.startGame__tingle');
const next = document.querySelector('.game__changeHover-audio');

historySkip.addEventListener('click', () => {
  preHistory.style.display = 'none';
  mainContent.style.display = 'flex';
  next.play();
  startGameTingle.play();

  setTimeout(() => {
    gameAudio.play();
  }, 15000);
  gameAudio.loop = true;
})


