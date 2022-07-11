const firstLogo = document.querySelector('.first__logo');
const secondLogo = document.querySelector('.second__logo');
const startGame = document.querySelector('.start__game');
const body = document.querySelector('body');
const prepare = document.querySelector('.prepare');
const prepareChoise = document.querySelector('.prepare__choise a');
const mainMenuOst = document.querySelector('.main__menu-ost');

prepareChoise.addEventListener('click', () => {
  prepare.style.display = 'none';
  document.querySelector('.logo').style.display = 'block';
  document.querySelector('.btn__inner').style.display = 'flex';
  mainMenuOst.play();
  mainMenuOst.loop = true;
});

startGame.addEventListener('click', () => {
  secondLogo.style.opacity = '0';
  firstLogo.style.opacity = '1';
  firstLogo.style.display = 'block';

  setTimeout(() => {
    body.classList.add('a')
    setTimeout(() => {
      window.location.href = 'gamePages/game.html';

    }, 2500);

  }, 1500);

});

const startGameBtn = document.querySelector('.start__game');
const startGameAudio = document.querySelector('.start__game-audio');
startGameBtn.addEventListener('click', () => {
  startGameBtn.style.animation = 'fonstSize 2.5s 1';
  startGameBtn.style.transition = '1.5s'
  startGameBtn.style.color = 'rgb(117, 5, 5)';
  startGameAudio.play();
});

const btnChangeFocus = document.querySelectorAll('.btn');
const changeFocusAudio = document.querySelector('.btn__changeFocus-audio');
btnChangeFocus.forEach(elem => {
  elem.addEventListener('mouseover', () => {
    changeFocusAudio.play();
  })
});


