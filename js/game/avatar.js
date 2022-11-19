const characterInfo = document.querySelector('.characterInfo');
const avatar = document.querySelector('.navPanel__item-avatar');

avatar.addEventListener('click', () => {
  characterInfo.style.display = 'flex';
})