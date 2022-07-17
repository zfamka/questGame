const backToMenu = document.querySelectorAll('.back__to__menu');

backToMenu.forEach(elem => {
  elem.addEventListener('click', () => {
    settings.style.display = 'none';
    aboutUs.style.display = 'none';
    menu.style.display = 'flex';
  })
})