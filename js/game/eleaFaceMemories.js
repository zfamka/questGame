//----------------- Elea face memories
const eleaPhoto = document.querySelector('.eleaPhoto');

const eleaFaceMemories = function () {
  eleaPhoto.style.display = 'block';
  optionButtonsElement.style.opacity = '0';
  setTimeout(() => {
    eleaPhoto.style.opacity = '0';
    optionButtonsElement.style.opacity = '1';
  }, 5000);
  setTimeout(() => {
    eleaPhoto.style.display = 'none';
  }, 6000);
};
// --------------------------------------