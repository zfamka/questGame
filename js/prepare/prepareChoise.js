const prepareChoise = document.querySelectorAll('.prepare__choise a');
const mainMenuOst = document.querySelector('.main__menu-ost');
const prepareYes = document.querySelector('.prepare__choise :first-child');
const prepareNo = document.querySelector('.prepare__choise :last-child');

const audio = document.querySelectorAll('audio');

const settingsRange = document.querySelector('.settings__range');
const storageVolume = localStorage.getItem('volume');
settingsRange.value = storageVolume;
audio.forEach(elem => {
  elem.volume = storageVolume;
})

prepareChoise.forEach(elem => {
  elem.addEventListener('click', () => {


    prepare.style.display = 'none';
    document.querySelector('.logo').style.display = 'block';
    document.querySelector('.btn__inner').style.display = 'flex';
    mainMenuOst.play();
    mainMenuOst.loop = true;
  });
});

function mouseJoke(elem, secondElem) {
  secondElem.addEventListener('mouseover', () => {
    if (secondElem.textContent === 'No') {
      secondElem.textContent = 'Yes';
      elem.textContent = 'No';
    }
  });
  elem.addEventListener('mouseover', () => {
    if (elem.textContent === 'No') {
      elem.textContent = 'Yes';
      secondElem.textContent = 'No';
    }
  })
};

mouseJoke(prepareYes, prepareNo);


