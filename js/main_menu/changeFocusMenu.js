const btnChangeFocus = document.querySelectorAll('.btn');
const changeFocusAudio = document.querySelector('.btn__changeFocus-audio');

btnChangeFocus.forEach(elem => {
  elem.addEventListener('mouseover', () => {
    changeFocusAudio.play();
    // changeFocusAudio.volume = '0.5';
  })
  elem.addEventListener('click', () => {
    startGameAudio.currentTime = 0
    startGameAudio.play();
    // startGameAudio.volume = '0.5';
  })
});