const firstLogo = document.querySelector('.first__logo');
const secondLogo = document.querySelector('.second__logo');
const startGames = document.querySelector('.start__game');
const container = document.querySelector('.container');
const prepare = document.querySelector('.prepare');
const startGameAudio = document.querySelector('.start__game-audio');
const btn = document.querySelectorAll('.btn');

startGames.addEventListener('click', () => {
  const mainMenuOst = document.querySelector('.main__menu-ost');
  let count = volumeRange.value;
  let count2 = volumeRange.value;
  secondLogo.style.opacity = '0';
  firstLogo.style.opacity = '1';
  firstLogo.style.display = 'block';
  startGames.style.animation = 'fonstSize 3.5s 1';
  startGames.style.transition = '1.5s'
  startGames.style.opacity = '1';

  if (volumeRange.value == 10) {
    count = 1;
    count2 = 1;
  } else if (volumeRange.value == 9) {
    count = 0.9;
    count2 = 0.9;
  } else if (volumeRange.value == 8) {
    count = 0.8;
    count2 = 0.8;
  } else if (volumeRange.value == 7) {
    count = 0.7;
    count2 = 0.7;
  } else if (volumeRange.value == 6) {
    count = 0.6;
    count2 = 0.6;
  } else if (volumeRange.value == 5) {
    count = 0.5;
    count2 = 0.5;
  } else if (volumeRange.value == 4) {
    count = 0.4;
    count2 = 0.4;
  } else if (volumeRange.value == 3) {
    count = 0.3;
    count2 = 0.3;
  } else if (volumeRange.value == 2) {
    count = 0.2;
    count2 = 0.2;
  } else if (volumeRange.value == 1) {
    count = 0.1;
    count2 = 0.1;
  }

  setInterval(() => {
    count = count - 0.1;
    count2 = count2 - 0.1;
    console.log(count)
    console.log(count2)
    mainMenuOst.volume = count;
    startGameAudio.volume = count2;
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