const firstLogo = document.querySelector('.first__logo');
const secondLogo = document.querySelector('.second__logo');
const startGames = document.querySelector('.start__game');
const body = document.querySelector('body');
const prepare = document.querySelector('.prepare');
const startGameAudio = document.querySelector('.start__game-audio');
const btn = document.querySelectorAll('.btn');

startGames.addEventListener('click', () => {
  secondLogo.style.opacity = '0';
  firstLogo.style.opacity = '1';
  firstLogo.style.display = 'block';
  startGames.style.animation = 'fonstSize 2.5s 1';
  startGames.style.transition = '1.5s'
  startGames.style.opacity = '1';
  startGameAudio.play();

  btn.forEach(elem => {
    elem.style.pointerEvents = 'none';
  })

  setTimeout(() => {
    body.classList.add('hideElem')
    setTimeout(() => {
      window.location.href = 'gamePages/game.html';

    }, 2500);

  }, 1500);
});