const btnChangeFocus = document.querySelectorAll('.btn');
const changeFocusAudio = document.querySelector('.btn__changeFocus-audio');
btnChangeFocus.forEach(elem => {
  elem.addEventListener('mouseover', () => {
    changeFocusAudio.play();
  })
});
