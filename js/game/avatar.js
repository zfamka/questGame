document.querySelector('.navPanel__item-avatar').addEventListener('click', () => {
  const mainC = document.querySelector('.mainContent');
  const characterInfo = document.querySelector('.characterInfo');

  characterInfo.style.opacity = '1';
  characterInfo.style.display = 'block';
  mainC.style.filter = 'grayscale(100%)';

  mainC.style.pointerEvents = 'none';

  document.querySelector('.characterInfo__close').style.opacity = '0';
  document.querySelector('.characterInfo__close').style.pointerEvents = 'none';
  setTimeout(() => {
    document.querySelector('.characterInfo__close').style.opacity = '1';
    document.querySelector('.characterInfo__close').style.pointerEvents = 'auto';
    document.querySelector('.characterInfo__close').style.transition = '1s';
  }, 3000)

  document.querySelector('.inventory__open').play();
})

document.querySelector('.characterInfo__close a').addEventListener('click', () => {
  const mainC = document.querySelector('.mainContent');
  const characterInfo = document.querySelector('.characterInfo');
  setTimeout(() => {
    mainC.style.pointerEvents = 'auto';
  }, 1000);
  
  if (characterInfo.style.display === 'block') {
    vanishingOpacity(1, 1, characterInfo, 0, 1000)
  }
  mainC.style.filter = 'grayscale(0%)';
  document.querySelector('.inventory__close').play();
})