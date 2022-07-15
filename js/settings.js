const setting = document.querySelector('.setting');
const settings = document.querySelector('.settings');
const menu = document.querySelector('.container');
const backToMenu = document.querySelector('.back__to__menu');

setting.addEventListener('click', () => {
  menu.style.display = 'none';
  settings.style.display = 'block'
});

backToMenu.addEventListener('click', () => {
  settings.style.display = 'none';
  menu.style.display = 'flex';
})
