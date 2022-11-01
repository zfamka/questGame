function freezeOptionBtnChoice(awaitBtns, buttons, freezeTime) {
  if (awaitBtns !== undefined) {
    buttons.style.transition = 'all 1ms ease'
    buttons.style.opacity = '0';
    buttons.style.pointerEvents = 'none';
    setTimeout(() => {
      buttons.style.transition = 'all 500ms ease'
    }, 100);
    setTimeout(() => {
      buttons.style.opacity = '1';
      buttons.style.pointerEvents = 'all';
    }, freezeTime);
  }
}