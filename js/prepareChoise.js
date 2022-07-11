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
});

const prepareYes = document.querySelector('.prepare__choise :first-child');
const prepareNo = document.querySelector('.prepare__choise :last-child');

prepareNo.addEventListener('mouseover', () => {
  if (prepareNo.textContent === 'No') {
    prepareNo.textContent = 'Yes';
    prepareYes.textContent = 'No';
  }
})
prepareNo.addEventListener('mouseout', () => {
  prepareNo.textContent = 'No'
  prepareYes.textContent = 'Yes';
});


