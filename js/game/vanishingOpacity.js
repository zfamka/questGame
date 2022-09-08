const vanishingOpacity = function (element, opacityNoneTime, displayNoneTime) {
  element.style.display = 'block';
  setTimeout(() => {
    element.style.opacity = '0';
  }, opacityNoneTime);
  setTimeout(() => {
    element.style.display = 'none';
  }, displayNoneTime);
};
