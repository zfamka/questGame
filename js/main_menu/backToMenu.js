const backToMenu = document.querySelectorAll('.backToMenu');
const audioBackToMenu = document.querySelector('.setting__audioBackToMenu');

backToMenu.forEach(elem => {
  elem.addEventListener('click', () => {
    settings.style.display = 'none';
    aboutUs.style.display = 'none';
    menu.style.display = 'flex';
    audioBackToMenu.play();
    // audioBackToMenu.volume = '0.5';
  })
})