const firstLogo = document.querySelector('.first__logo');
const secondLogo = document.querySelector('.second__logo');
const startGames = document.querySelector('.start__game');
const container = document.querySelector('.container');
const prepare = document.querySelector('.prepare');
const startGameAudio = document.querySelector('.start__game-audio');
const btn = document.querySelectorAll('.btn');

startGames.addEventListener('click', () => {
  const mainMenuOst = document.querySelector('.main__menu-ost');
  secondLogo.style.opacity = '0';
  firstLogo.style.opacity = '1';
  firstLogo.style.display = 'block';
  startGames.style.animation = 'fonstSize 3.5s 1';
  startGames.style.transition = '1.5s'
  startGames.style.opacity = '1';

  setInterval(() => {
    mainMenuOst.volume -= 0.1;
    startGameAudio.volume -= 0.1;
    console.log(mainMenuOst.volume)
  }, 380);

  btn.forEach(elem => {
    elem.style.pointerEvents = 'none';
  })

  setTimeout(() => {
    container.classList.add('hideElem');
    setTimeout(() => {
      window.location.href = 'gamePages/game.html';
    }, 2500);

  }, 1500);
});