const firstLogo = document.querySelector('.first_logo');
const secondLogo = document.querySelector('.second_logo');
const startGame = document.querySelector('.start_game');
const body = document.querySelector('body');

startGame.addEventListener('click', () => {
  secondLogo.style.opacity = '0';
  firstLogo.style.opacity = '1';

  setTimeout(() => {
    body.classList.add('a')
    setTimeout(() => {
      window.location.href = 'gamePages/game.html';

    }, 1500);

  }, 1000);

});