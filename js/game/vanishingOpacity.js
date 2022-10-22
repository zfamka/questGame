const vanishingOpacity = function (textNode, id, element, opacityNoneTime, displayNoneTime) {
  if (textNode === id) {
    element.style.display = 'block';
    setTimeout(() => {
      element.style.opacity = '0';
    }, opacityNoneTime);
    setTimeout(() => {
      element.style.opacity = '1';
    }, 3000);
    setTimeout(() => {
      element.style.display = 'none';
    }, displayNoneTime);
  }
};

const vanishingOpacityWithDisplayFlex = function (textNode, id, element, opacityNoneTime, displayNoneTime) {
  if (textNode === id) {
    setTimeout(() => {
      element.style.opacity = '0';
    }, opacityNoneTime);
    setTimeout(() => {
      element.style.display = 'none';
    }, displayNoneTime);
  }
};

