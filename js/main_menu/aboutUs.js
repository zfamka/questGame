const information = document.querySelector('.information');
const aboutUs = document.querySelector('.aboutUs');

information.addEventListener('click', () => {
  menu.style.display = 'none';
  aboutUs.style.display = 'block'
});

