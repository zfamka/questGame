const preHistory = document.querySelector('.preHistory');
const historySkip = document.querySelector('.next');
const mainContent = document.querySelector('.mainContent');

historySkip.addEventListener('click', () => {
  preHistory.style.display = 'none';
  mainContent.style.display = 'block'
})


