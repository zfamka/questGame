const itemsBracer = document.querySelector('.itemsBracer');

itemsBracer.addEventListener('click', () => {
  itemsBracer.style.transform = 'scale(1)';
  setTimeout(() => {
    itemsBracer.style.transform = 'scale(1.1)';
  }, 150);
});