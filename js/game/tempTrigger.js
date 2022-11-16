function isHot(elem) {
  const text = document.querySelector('.text');
  const btns = document.querySelector('.buttons');
  const inventory = document.querySelector('.inventory__menu');
  const avatar = document.querySelector('.navPanel__item-avatar');

  if (elem === true) {
    text.classList.add('hightTempEffectCss');
    btns.classList.add('hightTempEffectCss');
    inventory.classList.add('hightTempEffectCss');
    avatar.classList.add('hightTempEffectCss');
  } else if (elem === false) {
    text.classList.remove('hightTempEffectCss');
    btns.classList.remove('hightTempEffectCss');
    inventory.classList.remove('hightTempEffectCss');
    avatar.classList.remove('hightTempEffectCss');
  }
}

function isRlyHot(elem) {
  const text = document.querySelector('.text');
  const btns = document.querySelector('.buttons');
  const inventory = document.querySelector('.inventory__menu');
  const avatar = document.querySelector('.navPanel__item-avatar');

  if (elem === true) {
    text.classList.add('veryhightTempEffect');
    btns.classList.add('veryhightTempEffect');
    inventory.classList.add('veryhightTempEffect');
    avatar.classList.add('veryhightTempEffect');
  } else if (elem === false) {
    text.classList.remove('veryhightTempEffect');
    btns.classList.remove('veryhightTempEffect');
    inventory.classList.remove('veryhightTempEffect');
    avatar.classList.remove('veryhightTempEffect');
  }
}

function getAburnTrauma(elem) {
  const text = document.querySelector('.text');
  const btns = document.querySelector('.buttons');
  const inventory = document.querySelector('.inventory__menu');
  const avatar = document.querySelector('.navPanel__item-avatar');

  if (elem === true) {
    text.classList.add('getAburnTrauma');
    btns.classList.add('getAburnTrauma');
    inventory.classList.add('getAburnTrauma');
    avatar.classList.add('getAburnTrauma');
  } else if (elem === false) {
    text.classList.remove('getAburnTrauma');
    btns.classList.remove('getAburnTrauma');
    inventory.classList.remove('getAburnTrauma');
    avatar.classList.remove('getAburnTrauma');
  }
}
