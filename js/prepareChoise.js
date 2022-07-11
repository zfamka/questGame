const prepareChoise = document.querySelectorAll('.prepare__choise a');
const mainMenuOst = document.querySelector('.main__menu-ost');

prepareChoise.forEach(elem => {
  elem.addEventListener('click', () => {
    prepare.style.display = 'none';
    document.querySelector('.logo').style.display = 'block';
    document.querySelector('.btn__inner').style.display = 'flex';
    mainMenuOst.play();
    mainMenuOst.loop = true;
  });
})